import express, { json } from "express";
import NodeCache from "node-cache";
import cron from "node-cron"; // Import node-cron

const app = express();
const port = 3001;
const cache = new NodeCache();

app.use(json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend's origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const accessToken = "nxswsmw8sqcx3azw2ras4yq3";
const folderPath = "/Shared";
const cacheKey = `folder_${folderPath}`;

const fetchDataRecursively = async (folderPath) => {
  try {
    const response = await fetch(
      `https://gsalunkhe.egnyte.com/pubapi/v1/fs${folderPath}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();

    const results = [];

    if (data.folders && data.folders.length > 0) {
      for (const item of data.folders) {
        if (item.is_folder) {
          const subfolderData = await fetchDataRecursively(`${folderPath}/${item.name}`);
          results.push(subfolderData);
        }
      }
    }

    if (data.files && data.files.length > 0) {
      const newImages = data.files.filter(
        (item) => item.name.endsWith(".jpg") || item.name.endsWith(".png")
      );
      results.push(newImages);
    }

    return results;
  } catch (error) {
    console.error("Error fetching folder contents:", error);
    throw error;
  }
};

const fetchDataAndCache = async () => {
  try {
    const allData = await fetchDataRecursively(folderPath);
    const images = allData.flat();
    const cachedData = cache.get(cacheKey);

    if (JSON.stringify(images) === JSON.stringify(cachedData)) {
      console.log("Data has not changed. Returning cached data.");
    } else {
      cache.set(cacheKey, images);
      console.log("Cache updated with fresh data.");
    }
  } catch (error) {
    console.error("Error fetching and caching data:", error);
  }
};

// Schedule fetchDataAndCache to run every 1 minute
cron.schedule("* * * * *", fetchDataAndCache);

app.get("/api/images", async (req, res) => {
  try {
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log("Cached Data:", cachedData);
      res.json(cachedData);
    } else {
      res.status(404).json({ error: "Data not found in cache. Please try again later." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

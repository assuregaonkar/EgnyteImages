import express, {json} from "express";
import NodeCache from "node-cache";
const app = express();
const port = 3001;
const cache = new NodeCache({ stdTTL: 3600 });

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

app.get("/api/images", async (req, res) => {
  const accessToken = "d79cqxsq2uz6u4s2gkzn4akq";
  const folderPath = "/Shared";

  const fetchDataRecursively = async (folderPath) => {
    const cacheKey = `folder_${folderPath}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log("CachedData",cachedData)
      return cachedData;
    }
    try {
      const response = await fetch(
        `https://asuregaonkar.egnyte.com/pubapi/v1/fs${folderPath}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          
          },
        }
      );
      // response.setHeader('Cache-Control', 'max-age=630720000')
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

      cache.set(cacheKey, results);
      return results;
    } catch (error) {
      console.error("Error fetching folder contents:", error);
      throw error;
    }
  };

  try {
    const allData = await fetchDataRecursively(folderPath);
    // Combine all the data before sending the response
    const images = allData.flat(); // Flatten the nested arrays
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

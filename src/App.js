import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateImages } from "./actions.js";
import FetchData from "./utilities/fetchData.js";
import "./App.css";
const App = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const [hasFetchedImages, setHasFetchedImages] = useState(false);

  useEffect(async() => {
    // Make a request to your server
    const localStorageImage = JSON.parse(localStorage.getItem('images'))
    const timeStap = parseInt(localStorage.getItem('timestap'))
    const currentTime = new Date().getTime()
    console.log("current time",currentTime);
   
    if(localStorageImage && timeStap && currentTime < timeStap){ // compairing 
      
      // response is till fresh
      dispatch(updateImages(localStorageImage));
    } else {
      const response = await FetchData('http://localhost:3001/api/images')
      console.log("data",response);
      dispatch(updateImages(response));
      setHasFetchedImages(true);
      localStorage.setItem('images', JSON.stringify(response))
      localStorage.setItem('timestap',currentTime + 15*60*1000 ) // setting time for next 15 min
    }

    // fetch('http://localhost:3001/api/images') 
    //   .then((response) => response.json())
    //   .then((data) => {
          //     console.log("data",data);
    //     dispatch(updateImages(data));
    //     setHasFetchedImages(true);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching images:", error);
    //   });
  }, [dispatch, hasFetchedImages]);

  const memoizedImages = useMemo(() => images, [images]);
  console.log(memoizedImages.images[0]);
  return (
    <div>
      <h1>Images in Egnyte Account</h1>

      <div className="video-container">
        <div className="video-row">
          {Array.isArray(memoizedImages.images) &&
          memoizedImages.images.length > 0 ? (
            memoizedImages.images[0].map((nestedArray, index) => (
              <div key={index}>
      
                 {nestedArray.map((image, innerIndex) => (
                  <div key={innerIndex} className="image-item">
                <h2>{image.name}</h2>
                <img
                  src={`https://asuregaonkar.egnyte.com/opendocument.do?entryId=${image.entry_id}&forceDownload=false&preview=true&prefetch=true`}
                  width="320"
                  height="180"
                  alt="image"
                />
              </div>
            ))}
            </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;


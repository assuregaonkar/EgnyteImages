import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateImages } from "./actions.js";
import {  addToCache } from "./utilities/indexDb.js";
import "./App.css";
const App = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const [hasFetchedImages, setHasFetchedImages] = useState(false);

  // useEffect(() => {
  //   // Make a request to your server
  //   const fetchData = async() => {
  //     const response = await FetchData('http://localhost:3001/api/images')
      
  //     console.log("data",response);
  //     dispatch(updateImages(response));
  //     setHasFetchedImages(true);
  //     localStorage.setItem('images', JSON.stringify(response))
  //     localStorage.setItem('timestap',currentTime + 15*60*1000 ) // setting time for next 15 min
  //   }
  //   const localStorageImage = JSON.parse(localStorage.getItem('images'))
  //   const timeStap = parseInt(localStorage.getItem('timestap'))
  //   const currentTime = new Date().getTime()
  //   console.log("current time",currentTime);
   
  //   // if(false){ // compairing 
      
  //   //   // response is till fresh
  //   //   dispatch(updateImages(localStorageImage));
  //   // } else {
  //    fetchData()
  //   // }

  //   // fetch('http://localhost:3001/api/images') 
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //         //     console.log("data",data);
  //   //     dispatch(updateImages(data));
  //   //     setHasFetchedImages(true);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching images:", error);
  //   //   });
  // }, [dispatch, hasFetchedImages]);

  useEffect(() => {
    const url = 'http://localhost:3001/api/images';

    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const responseJson = await response.json();

          // Store the response in IndexedDB for future use
          await addToCache(url, responseJson);

          dispatch(updateImages(responseJson));
          setHasFetchedImages(true);
        
      } catch (error) {
        console.error('Error fetching and caching data:', error);
      }
    };

    fetchData();
  }, [dispatch, hasFetchedImages]);

  const memoizedImages = useMemo(() => images, [images]);
  console.log(memoizedImages.images);
  return (
    <div>
      <h1>Images in Egnyte Account</h1>

      <div className="video-container">
        <div className="video-row">
          {Array.isArray(memoizedImages.images[0]) && memoizedImages.images[0].length > 0 ? (
            memoizedImages.images[0].map((imageGroup, groupIndex) => (
              <div key={groupIndex}>
                {Array.isArray(imageGroup) && imageGroup.length > 0 ? (
                  imageGroup.map((image, index) => (
                    <div key={index} className="image-item">
                      <h2>{image.name}</h2>
                      <img
                        src={`https://gsalunkhe.egnyte.com/opendocument.do?entryId=${image.entry_id}&forceDownload=false&preview=true&prefetch=true?timestamp=${image.uploaded}`}
                        width="320"
                        height="180"
                        alt="image"
                      />
                    </div>
                  ))
                ) : (
                  <p>Loading..</p>
                )}
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


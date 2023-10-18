import React from 'react';


import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "hooks/useApplicationData";




// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const {
    mainPagePhotos, topicData,
    photoData, favouritePhotos,
    setFavouritePhotos, isModalActive,
    setIsModalActive, clickedPhotoData,
    setClickedPhotoData, setPhotoData,
    setTopicData, handleTopicClick, handleClose
  } = useApplicationData();
  

  return (
    <div className="App">

      <HomeRoute
        mainPagePhotos={mainPagePhotos}
        data={photoData}
        topics={topicData}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
        setPhotoData={setPhotoData}
        setTopicData={setTopicData}
        handleTopicClick={handleTopicClick}
      />

      {isModalActive && <PhotoDetailsModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
        setPhotoData={setPhotoData}
        imgClass={mainPagePhotos}
        handleClose={handleClose}
      />}
    </div>
  );
};

export default App;

import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {


  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation
        favouritePhotos={props.favouritePhotos}
        topics={props.topics}
        handleTopicClick={props.handleTopicClick}
      />

      <PhotoList
        imgClass={props.mainPagePhotos}
        setFavouritePhotos={props.setFavouritePhotos}
        favouritePhotos={props.favouritePhotos}
        isModalActive={props.isModalActive}
        setIsModalActive={props.setIsModalActive}
        clickedPhotoData={props.clickedPhotoData}
        setClickedPhotoData={props.setClickedPhotoData}
        handlePhotoClick={props.handlePhotoClick}
        data={props.data}/>
      
    </div>
  );
};

export default HomeRoute;

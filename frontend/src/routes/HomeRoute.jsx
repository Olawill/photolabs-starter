import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {


  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation
        favouritePhotos={props.favouritePhotos}
        topics={props.topics}
      />

      <PhotoList
        imgClass={props.mainPagePhotos}
        setFavouritePhotos={props.setFavouritePhotos}
        favouritePhotos={props.favouritePhotos}
        isModalActive={props.isModalActive}
        setIsModalActive={props.setIsModalActive}
        clickedPhotoData={props.clickedPhotoData}
        setClickedPhotoData={props.setClickedPhotoData}
        data={props.data}/>
      
      <PhotoDetailsModal
        isModalActive={props.isModalActive}
        setIsModalActive={props.setIsModalActive}
        favouritePhotos={props.favouritePhotos}
        setFavouritePhotos={props.setFavouritePhotos}
        clickedPhotoData={props.clickedPhotoData}
        setClickedPhotoData={props.setClickedPhotoData}
        imgClass={props.mainPagePhotos}
      />
    </div>
  );
};

export default HomeRoute;

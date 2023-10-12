import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [clickedPhotoData, setClickedPhotoData] = useState({});

  // Class Names for Image on Home route
  const mainPagePhotos = {
    divClass: "photo-list__item",
    imgClass: "photo-list__image",
    userDivClass: "photo-list__user-details",
    profileImg: "photo-list__user-profile",
    profileInfo: "photo-list__user-info",
    profileLocation: "photo-list__user-location"
    // listClass: "photo-list"
  };


  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation favouritePhotos={favouritePhotos} />
      <PhotoList
        imgClass={mainPagePhotos}
        setFavouritePhotos={setFavouritePhotos}
        favouritePhotos={favouritePhotos}
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
        data={props.data}/>
      
      <PhotoDetailsModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        favouritePhotos={favouritePhotos}
        setFavouritePhotos={setFavouritePhotos}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
        imgClass={mainPagePhotos}/>
    </div>
  );
};

export default HomeRoute;

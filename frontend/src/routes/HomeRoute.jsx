import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = (props) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [clickedPhotoData, setClickedPhotoData] = useState({});


  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation favouritePhotos={favouritePhotos} />
      <PhotoList
        setFavouritePhotos={setFavouritePhotos}
        favouritePhotos={favouritePhotos}
        setIsModalActive={setIsModalActive}
        clickedPhotoData={clickedPhotoData}
        setClickedPhotoData={setClickedPhotoData}
        data={props.data}/>
      
      <PhotoDetailsModal
        setIsModalActive={setIsModalActive}
        isModalActive={isModalActive}
        clickedPhotoData={clickedPhotoData}/>
    </div>
  );
};

export default HomeRoute;

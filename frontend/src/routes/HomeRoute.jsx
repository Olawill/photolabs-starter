import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation favouritePhotos={favouritePhotos} />
      <PhotoList setFavouritePhotos={setFavouritePhotos} favouritePhotos={favouritePhotos} />
    </div>
  );
};

export default HomeRoute;

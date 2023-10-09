import React, { useState } from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';



// Note: Rendering a single component to build components in isolation
const App = () => {

  // Create three instances of photoitem
  // const photos = Array.from(new Array(3),
  //   () => <PhotoListItem
  //     key={sampleDataForPhotoListItem.id}
  //     sampleDataForPhotoListItem={sampleDataForPhotoListItem}
  //   />);

  // {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}

  const [favouritePhotos, setFavouritePhotos] = useState([]);

  // const handleClick = useCallback(() => {

  //   return setSelected(prevState => !prevState);
  // });


  return (
    <div className="App">
      {/* {photos} */}
      <TopNavigation favouritePhotos={favouritePhotos} />
      <PhotoList setFavouritePhotos={setFavouritePhotos} favouritePhotos={favouritePhotos}/>
    </div>
  );
};

export default App;

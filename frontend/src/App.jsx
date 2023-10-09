import React from 'react';

import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';



// Note: Rendering a single component to build components in isolation
const App = () => {

  // Create three instances of photoitem
  // const photos = Array.from(new Array(3),
  //   () => <PhotoListItem
  //     key={sampleDataForPhotoListItem.id}
  //     sampleDataForPhotoListItem={sampleDataForPhotoListItem}
  //   />);

  // {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}


  // const handleClick = useCallback(() => {

  //   return setSelected(prevState => !prevState);
  // });


  return (
    <div className="App">
      {/* {photos} */}
      <HomeRoute />
      <PhotoDetailsModal />
    </div>
  );
};

export default App;

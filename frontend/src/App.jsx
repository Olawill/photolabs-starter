import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';



// Note: Rendering a single component to build components in isolation
const App = () => {
  // Create three instances of photoitem
  // const photos = Array.from(new Array(3),
  //   () => <PhotoListItem
  //     key={sampleDataForPhotoListItem.id}
  //     sampleDataForPhotoListItem={sampleDataForPhotoListItem}
  //   />);

  // {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}


  return (
    <div className="App">
      {/* {photos} */}
      <TopicList />
      <PhotoList />
    </div>
  );
};

export default App;

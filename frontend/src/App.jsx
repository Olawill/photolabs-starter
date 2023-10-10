import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photosInfo from './mocks/photos';



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

  // const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div className="App">
      {/* {photos} */}
      <HomeRoute data={photosInfo}/>
      {/* <PhotoDetailsModal setIsModalActive={setIsModalActive} isModalActive={isModalActive}/> */}
    </div>
  );
};

export default App;

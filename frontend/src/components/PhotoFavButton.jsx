import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [selected, setSelected] = useState(false);
  
  const handleClick = useCallback(() => {
    return setSelected(prevState => !prevState);
  });

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={selected} />
       
      </div>
    </div>
  );
};

export default PhotoFavButton;
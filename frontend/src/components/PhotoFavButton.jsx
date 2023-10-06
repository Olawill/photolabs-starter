import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [like, setLike] = useState('false');
  const handleClick = useCallback(() => {
    setLike(prevState => !prevState);
  });

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={like}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;
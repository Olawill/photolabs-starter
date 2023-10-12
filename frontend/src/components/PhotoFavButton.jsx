import React, { useCallback } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {


  // Check if photo is already in list
  const infavPhoto = props.favPhoto.includes(props.photoData.id);

  const handleClick = useCallback(() => {
    
    
    {!infavPhoto ? props.setFav([...props.favPhoto, props.photoData.id])
      : props.setFav([...props.favPhoto].filter(id => id !== props.photoData.id));
    }
  
  });

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={infavPhoto} />
       
      </div>
    </div>
  );
};

export default PhotoFavButton;
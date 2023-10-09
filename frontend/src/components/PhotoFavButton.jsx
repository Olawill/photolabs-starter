import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {

  const [selected, setSelected] = useState(false);

  const handleClick = useCallback(() => {
    
    setSelected(prevState => !prevState);

    // Check if photo is already in list
    const infavPhoto = props.favPhoto.includes(props.photoData.id);
    
    {!infavPhoto ? props.setFav([...props.favPhoto, props.photoData.id])
      : props.setFav([...props.favPhoto].filter(id => id !== props.photoData.id));
    }
  
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
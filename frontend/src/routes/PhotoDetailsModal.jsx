import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';


const PhotoDetailsModal = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    setIsActive(false);
  };

  return (
    <div className="photo-details-modal"
      style={{display: isActive ? 'inherit' : 'none'}}
    >
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;

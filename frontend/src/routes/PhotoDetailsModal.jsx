import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
// import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {

  const handleClose = (e) => {
    e.preventDefault();
    props.setIsModalActive(false);
  };

  return (
    <div className="photo-details-modal"
      style={{display: props.isModalActive ? 'inherit' : 'none'}}>
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {props.isModalActive && <>
        <div>
          <img
            className="photo-details-modal__image"
            src={props.clickedPhotoData.urls.full}
            alt={props.clickedPhotoData.id}/>

          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile"
              src={props.clickedPhotoData.user.profile}
              alt={props.clickedPhotoData.user.username} />
            <span className="photo-details-modal__photographer-info">
              {props.clickedPhotoData.user.name}
              <p className="photo-details-modal__photographer-location">{props.clickedPhotoData.location.city}, {props.clickedPhotoData.location.country}</p>
            </span>
          </div>
        </div>
        <h5 className="photo-details-modal__header">Similar Photos</h5>
        <ul className="photo-details-modal__top-bar">
          <PhotoList data={Object.values(props.clickedPhotoData.similarPhotos)} />
        </ul>
      </>
      }
    </div>
  );
};

export default PhotoDetailsModal;

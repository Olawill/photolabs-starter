import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {

  // Class Names for Image on Modal Page
  const modalPagePhotos = {
    divClass: "photo-list__item",
    imgClass: "photo-details-modal__image",
    userDivClass: "photo-details-modal__photographer-details",
    profileImg: "photo-details-modal__photographer-profile",
    profileInfo: "photo-details-modal__photographer-info",
    profileLocation: "photo-details-modal__photographer-location",
    listClass: "photo-details-modal__top-bar"
  };

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

        <PhotoListItem
          data={props.clickedPhotoData}
          imgClass={modalPagePhotos}
          favouritePhotos={props.favouritePhotos}
          setFavouritePhotos={props.setFavouritePhotos}/>

        <h5 className="photo-details-modal__header">Similar Photos</h5>
        <ul className="photo-details-modal__top-bar">
          <PhotoList
            data={Object.values(props.clickedPhotoData.similarPhotos)}
            imgClass={props.imgClass}
            favouritePhotos={props.favouritePhotos}
            setFavouritePhotos={props.setFavouritePhotos}
          />
        </ul>
      </>
      }
    </div>
  );
};

export default PhotoDetailsModal;

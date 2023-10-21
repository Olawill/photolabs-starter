import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';


const PhotoDetailsModal = (props) => {

  return (
    <div className="photo-details-modal"
      style={{display: props.isModalActive ? 'inherit' : 'none'}}>
      <button className="photo-details-modal__close-button" onClick={props.handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {props.isModalActive && <>

        <PhotoListItem
          data={props.clickedPhotoData}
          imgClass={props.modalClass}
          favouritePhotos={props.favouritePhotos}
          setFavouritePhotos={props.setFavouritePhotos}/>

        <h5 className="photo-details-modal__header">Similar Photos</h5>
        <ul className="photo-details-modal__top-bar">
          <PhotoList
            data={Object.values(props.clickedPhotoData.similar_photos)}
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

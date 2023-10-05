import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item" key={props.sampleDataForPhotoListItem.id}>
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource} alt={props.sampleDataForPhotoListItem.id} />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.sampleDataForPhotoListItem.profile} alt={props.sampleDataForPhotoListItem.username} />
        <div>
          <p className="photo-list__user-info">{props.sampleDataForPhotoListItem.username}</p>
          <p className="photo-list__user-location">{props.sampleDataForPhotoListItem.location.city}, {props.sampleDataForPhotoListItem.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

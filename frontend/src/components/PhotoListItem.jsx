import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item" key={props.data.id}>
      <PhotoFavButton />
      <img className="photo-list__image" src={props.data.urls.full} alt={props.data.id} />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.data.user.profile} alt={props.data.user.username} />
        <span className="photo-list__user-info">
          {props.data.user.name}
          <p className="photo-list__user-location">{props.data.location.city}, {props.data.location.country}</p>
        </span>
      </div>
    </div>
  );
};

export default PhotoListItem;

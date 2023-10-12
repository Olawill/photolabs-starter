import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  /* Insert React */
  const [selected, setSelected] = useState(props.favouritePhotos.includes(props.data.id));

  return (
    <div className={props.imgClass.divClass}
      key={props.data.id}>

      <PhotoFavButton
        favPhoto={props.favouritePhotos}
        setFav={props.setFavouritePhotos}
        photoData={props.data}
        selected={selected}
        setSelected={setSelected}
      />
      <img
        className={props.imgClass.imgClass}
        src={props.data.urls.full}
        alt={props.data.id}
        onClick={() => {
          props.setIsModalActive(true);
          props.setClickedPhotoData(props.data);
        }}/>

      <div className={props.imgClass.userDivClass}>
        <img className={props.imgClass.profileImg} src={props.data.user.profile} alt={props.data.user.username} />
        <span className={props.imgClass.profileInfo}>
          {props.data.user.name}
          <p className={props.imgClass.profileLocation}>{props.data.location.city}, {props.data.location.country}</p>
        </span>
      </div>
    </div>
  );
};

export default PhotoListItem;

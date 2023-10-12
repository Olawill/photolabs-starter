import topics from "./../../src/mocks/topics";
import photos from "./../../src/mocks/photos";
import { useState } from "react";

const useApplicationData = () => {
  // TOPICS
  const onLoadTopic = topics;

  // PHOTOS
  const onLoadPhoto = photos;

  // STATES
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [clickedPhotoData, setClickedPhotoData] = useState({});

  // Class Names for Image on Home route
  const mainPagePhotos = {
    divClass: "photo-list__item",
    imgClass: "photo-list__image",
    userDivClass: "photo-list__user-details",
    profileImg: "photo-list__user-profile",
    profileInfo: "photo-list__user-info",
    profileLocation: "photo-list__user-location"
  };

  return {
    mainPagePhotos,
    onLoadTopic,
    onLoadPhoto,
    favouritePhotos,
    setFavouritePhotos,
    isModalActive,
    setIsModalActive,
    clickedPhotoData,
    setClickedPhotoData
  };
};

export default useApplicationData;
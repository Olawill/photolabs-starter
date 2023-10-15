import { useReducer, useEffect } from "react";

// Define action types
const SET_FAVOURITE_PHOTOS = "SET_FAVOURITE_PHOTOS";
const SET_IS_MODAL_ACTIVE = "SET_IS_MODAL_ACTIVE";
const SET_CLICKED_PHOTO_DATA = "SET_CLICKED_PHOTO_DATA";
const SET_PHOTO_DATA = "SET_PHOTO_DATA";
const SET_TOPIC_DATA = "SET_TOPIC_DATA";


// Define the reducer function to manage state changes
const reducer = (state, action) => {
  switch (action.type) {
  case SET_FAVOURITE_PHOTOS:
    return { ...state, favouritePhotos: action.payload };
  case SET_IS_MODAL_ACTIVE:
    return { ...state, isModalActive: action.payload };
  case SET_CLICKED_PHOTO_DATA:
    return { ...state, clickedPhotoData: action.payload };
  case SET_PHOTO_DATA:
    return { ...state, photoData: action.payload };
  case SET_TOPIC_DATA:
    return { ...state, topicData: action.payload };
  default:
    return state;
  }
};

const useApplicationData = () => {
  // Initial state
  const initialState = {
    mainPagePhotos: {
      divClass: "photo-list__item",
      imgClass: "photo-list__image",
      userDivClass: "photo-list__user-details",
      profileImg: "photo-list__user-profile",
      profileInfo: "photo-list__user-info",
      profileLocation: "photo-list__user-location"
    },
    topicData: [],
    photoData: [],
    favouritePhotos: [],
    isModalActive: false,
    clickedPhotoData: {},
  };

  // Create a reducer and initialize state
  const [state, dispatch] = useReducer(reducer, initialState);

  // EFFECT TO REQUEST PHOTOS FROM API
  useEffect(() => {
    fetch("/api/photos")
      .then(response => response.json())
      .then(data => {
        setPhotoData(data);
      })
      .catch(error => console.log(error));

    fetch("/api/topics")
      .then(response => response.json())
      .then(data => {
        setTopicData(data);
      })
      .catch(error => console.log(error));
  }, []);

  // Actions to update state
  const setFavouritePhotos = (favourites) => {
    dispatch({ type: SET_FAVOURITE_PHOTOS, payload: favourites });
  };

  const setIsModalActive = (isActive) => {
    dispatch({ type: SET_IS_MODAL_ACTIVE, payload: isActive });
  };

  const setClickedPhotoData = (data) => {
    dispatch({ type: SET_CLICKED_PHOTO_DATA, payload: data });
  };

  const setPhotoData = (data) => {
    dispatch({ type: SET_PHOTO_DATA, payload: data });
  };

  const setTopicData = (data) => {
    dispatch({ type: SET_TOPIC_DATA, payload: data });
  };

  return {
    ...state,
    setFavouritePhotos,
    setIsModalActive,
    setClickedPhotoData,
    setPhotoData,
    setTopicData,
  };
};

export default useApplicationData;

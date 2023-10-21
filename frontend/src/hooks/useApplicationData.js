import { useReducer, useEffect } from "react";
import axios from "axios";

// Define action types
const SET_FAVOURITE_PHOTOS = "SET_FAVOURITE_PHOTOS";
const SET_IS_MODAL_ACTIVE = "SET_IS_MODAL_ACTIVE";
const SET_CLICKED_PHOTO_DATA = "SET_CLICKED_PHOTO_DATA";
const SET_PHOTO_DATA = "SET_PHOTO_DATA";
const SET_TOPIC_DATA = "SET_TOPIC_DATA";
const GET_PHOTOS_BY_TOPICS = "GET_PHOTOS_BY_TOPICS";


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
  case GET_PHOTOS_BY_TOPICS:
    return { ...state, selectedTopicId: action.payload };
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
    // Class Names for Image on Modal Page
    modalPagePhotos: {
      divClass: "photo-list__item",
      imgClass: "photo-details-modal__image",
      userDivClass: "photo-details-modal__photographer-details",
      profileImg: "photo-details-modal__photographer-profile",
      profileInfo: "photo-details-modal__photographer-info",
      profileLocation: "photo-details-modal__photographer-location",
      listClass: "photo-details-modal__top-bar"
    },
    topicData: [],
    photoData: [],
    favouritePhotos: [],
    isModalActive: false,
    clickedPhotoData: {},
    selectedTopicId: null,
  };

  // HANDLE MODAL CLOSE
  const handleClose = (e) => {
    e.preventDefault();
    setIsModalActive(false);
  };

  // HANDLE CLICKING A PHOTO TO VIEW LARGER VERSION
  const handlePhotoClick = (data) => {

    setClickedPhotoData(data);
    setIsModalActive(true);
  };

  // Create a reducer and initialize state
  const [state, dispatch] = useReducer(reducer, initialState);

  // EFFECT TO REQUEST PHOTOS FROM API
  const { selectedTopicId } = state;
  useEffect(() => {
    // TOPICS AND DATA
    const topicPromise = axios.get("/api/topics");
    const dataForTopicPromise = axios.get(`/api/topics/photos/${selectedTopicId}`);
    const photoPromise = axios.get("/api/photos");

    const promises = [topicPromise, selectedTopicId ? dataForTopicPromise : photoPromise];

    Promise.all(promises)
      .then((dataArray) => {
          
        const [topics, photos] = dataArray;

        // SET THE TOPICS DATA
        setTopicData(topics.data);

        // SET PHOTO DATA
        setPhotoData(photos.data);

      })
      .catch((error) => console.log("Error", error));

  }, [selectedTopicId]);


  // FUNCTION TO HANDLE CLICK ON TOPICS
  const handleTopicClick = (topicID) => {
    getTopicPhotoData(topicID);
  };

  // Actions to update statetopic
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

  const getTopicPhotoData = (topicID) => {
    dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: topicID });
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
    handleTopicClick,
    handleClose,
    handlePhotoClick,
  };
};

export default useApplicationData;

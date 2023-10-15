import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {props.topics.map(topic => <TopicListItem
        key={topic.id}
        topic={topic}
        handleTopicClick={props.handleTopicClick}/>)}
    </div>
  );
};

export default TopicList;

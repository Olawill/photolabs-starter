import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  return (
    <div className="topic-list__item" onClick={() => props.handleTopicClick(props.topic.id)}>
      {/* Insert React */}
      <span>
        {props.topic.title}
      </span>
    </div>
  );
};

export default TopicListItem;

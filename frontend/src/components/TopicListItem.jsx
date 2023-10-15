import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  return (
    <div className="topic-list__item" onClick={() => props.handleTopicClick(props.topic.id)}>
      {/* Insert React */}
      <div className="topic-list__item">
        <span>
          {props.topic.title}
        </span>
      </div>
    </div>
  );
};

export default TopicListItem;

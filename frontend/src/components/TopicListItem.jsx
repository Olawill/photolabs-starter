import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
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

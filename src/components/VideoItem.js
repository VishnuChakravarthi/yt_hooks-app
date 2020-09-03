import React from "react";

export default ({ video, setSelected }) => {
  return (
    <div className="ui items" onClick={() => setSelected(video)}>
      <div className="video-item item">
        <div className="image">
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="content">{video.snippet.title}</div>
      </div>
      <div className="ui divider"></div>
    </div>
  );
};

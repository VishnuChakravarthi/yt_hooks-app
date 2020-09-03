import React from "react";
import VideoItem from "./VideoItem";

export default ({ results, setSelected }) => {
  const renderedList = results.map((result) => {
    return (
      <div>
        <VideoItem video={result} setSelected={setSelected} />
      </div>
    );
  });

  return <div className="ui container">{renderedList}</div>;
};

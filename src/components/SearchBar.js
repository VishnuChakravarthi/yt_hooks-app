import React, { useState } from "react";

export default ({ setTerm, term, click, setClick }) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    setClick(click === "" ? "clicked" : "");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} className="ui form searchbar">
        <div className="field">
          <label>Enter Video Name</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

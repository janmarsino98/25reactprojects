import React, { useState } from "react";

const Article = ({ id, name, lastName, story, isOpen, onClick }) => {
  return (
    <div>
      <div>{`Hello this is ${name} ${lastName}`}</div>
      <button onClick={onClick}>{!isOpen ? "Show More" : "Show less"}</button>
      {isOpen && <div className="text-blue-800">{`My story: ${story}`}</div>}
    </div>
  );
};

export default Article;

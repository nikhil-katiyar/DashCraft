import React from "react";

const Picture = ({ id, url }) => {
  return (
    <div>
      <img src={url} width="150px" />
    </div>
  );
};

export default Picture;

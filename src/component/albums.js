import React from "react";

const AlbumCard = ({ thumbnail, text }) => {
  return (
    <div className="card">
      <img className="thumbnail" width="100px" height="100px" src={thumbnail} />
      <p className="text-place">{text}</p>
    </div>
  );
};
export default AlbumCard;

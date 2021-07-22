import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import FormComponent from "./component/form";
import AlbumCard from "./component/albums";
import { getAlbumsAction } from "./redux/actions";

const App = () => {
  const [albumId, setAlbumId] = useState("");
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.data);
  const onChange = ({ value }) => {
    console.log(value);
    setAlbumId(value);
  };

  const handleSubmit = () => {
    dispatch(getAlbumsAction(albumId));
  };
  return (
    <div className="App">
      <h2>Albums App</h2>
      <FormComponent handleSubmit={handleSubmit} onChange={onChange} />
      <div className="card-wrapper">
        {photos.map((photo) => (
          <AlbumCard
            thumbnail={photo.thumbnailUrl}
            text={photo.title}
            key={photo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

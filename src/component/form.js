import React from "react";

const FormComponent = ({ handleSubmit, onChange }) => {
  return (
    <div class="searchForm">
      <input
        type="text"
        className="searchForm__input"
        onChange={(event) => onChange(event.target)}
        placeholder="Search for an ulbum"
      />

      <button onClick={handleSubmit} className="searchForm__button">
        get album photo by id
      </button>
    </div>
  );
};
export default FormComponent;

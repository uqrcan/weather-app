import React, { useState } from "react";

const InputAndButton = ({ onCityChange }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    onCityChange(city);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  

  const renk ={
    backgroundColor : "#252627",
    fontWeight: "700",
    color:"#B0F2B4"
  }


    return (
        <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Şehir Giriniz"
          aria-label="Şehir Giriniz"
          aria-describedby="button-addon2"
          value={city}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn"
          style={renk}
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          ARA
        </button>
      </div>
    );
};

export default InputAndButton;
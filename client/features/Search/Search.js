import React, { useState } from "react";
import Home from "../home/Home";
import Weather from "../Weather/Weather";
import Generate from "../Generate/Generate";
import Airbnb from "../Airbnb/Airbnb";

const Search = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [city, setCity] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="component search">
      <h1 id="title">City Search</h1>

      {!isSubmitted && (
        <form onSubmit={handleSubmit} className="form">
          <>
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city name"
            />
            <button type="submit">Submit</button>
          </>
        </form>
      )}

      {isSubmitted && (
        <>
          <Home city={city} />
          <Weather city={city} />
          <Generate city={city} />
          <Airbnb city={city} />
        </>
      )}
    </div>
  );
};

export default Search;

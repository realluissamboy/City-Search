import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAirbnbListings } from "./airSlice";

const Airbnb = ({ city }) => {
  const dispatch = useDispatch();
  const airbnb = useSelector((state) => state.airbnb);

  useEffect(() => {
    dispatch(fetchAirbnbListings(city));
  }, [dispatch, city]);

  return (
    <>
      <div>
        {" "}
        Airbnb
        {airbnb.results && (
          <div className="airbnb">
            {/* <h2>Airbnb</h2> */}
            {airbnb.results.map((result, index) => (
              <div key={`result-${index}`}>
                <div>
                  <img
                    src={result.images[0]}
                    alt="First Airbnb image"
                    style={{ width: "300px", height: "225px" }}
                  />
                  <a
                    href={result.deeplink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <div>{result.name}</div>
                  </a>
                  <li>Bedrooms: {result.bedrooms}</li>{" "}
                  <li>Bathrooms: {result.bathrooms}</li>{" "}
                  <li>Rate: ${result.price.rate} nightly</li>{" "}
                  <li>Amenities: {result.previewAmenities.join(", ")}</li>{" "}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Airbnb;

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
        {airbnb.results && (
          <div>
            <h2>Airbnb</h2>
            <div key="results.id">
              The results are <li>{airbnb.results[0].name}</li>{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Airbnb;

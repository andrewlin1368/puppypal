import "./App.css";
import React from "react";
import { puppyList } from "./data";
import { useState } from "react";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log(featPupId);
  const featurePup = puppies.find((pup) => pup.id === featPupId);
  console.log(featurePup);
  return (
    <>
      <div>
        {featPupId && (
          <div>
            <h2>{featurePup.name}</h2>
            <ul>
              <li>Age: {featurePup.age}</li>
              <li>Email: {featurePup.email}</li>
            </ul>
          </div>
        )}

        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;

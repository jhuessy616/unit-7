import React from "react";

// You can use a react fragment instead of an div to house your single jsx component.
// Wrap tags can either be <React.Fragment> </React.Fragment> or you can use empty tags <> </> Will need import React from "react" if using React.Fragment
function ChallengeOneInstructions() {
  return (
    <React.Fragment>
      <h3>Create the following:</h3>
     <ul style={{textAlign:"left", color: "blue"}}>
        <li>Create a new folder called aboutme</li>
        <li>Create a new file inside the folder called AboutMe.jsx</li>
        <li>
          create a p tag with where you grew up (city/state) - use variables for
          city and state
        </li>
        <li>
          an unordered list with the last 3 places you have visited (target,
          alaska..etc)
        </li>
      </ul>
    </React.Fragment>
  );
}

export default ChallengeOneInstructions;
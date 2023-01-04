## Simple React Extension Snippets Common Ones
- sfc : stateless functional Component
- imrs : imports react and usestate
- imrse: imports react, useState, useEffect
- uef: useEffect
- usf: useState


## React Inline Styling

On the html element you will use the style atribute and you will sent it equal to an object.

Example:

```jsx

      <h3>Create the following:</h3>
      <ul style={{textAlign: "left"}}>
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


```

Another Example of this would be to create a "styles" variable insidhe the function and reference the object later in the code.

Example:

```jsx
function ChallengeOneInstructions() {
  let styles = {
    ul: {
      textAlign: "left",
      color: "red",
    },
    h3: {
      color: "green",
    },
  };
  return (
    <React.Fragment>
      <h3 style={styles.h3}>Create the following:</h3>
      <ul style={styles.ul}>
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
```
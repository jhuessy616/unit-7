import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import MovieIndex from "./components/movie/MovieIndex";
// import MovieEdit from "./components/movie/MovieEdit";
import MovieEditRob from "./components/movie/MovieEditRob";


function App() {
  const [sessionToken, setSessionToken] = useState("");
  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken)
    setSessionToken(newToken)
    console.log(newToken)
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"))
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth updateToken={updateToken} />} />
        <Route path="/movie" element={<MovieIndex token={sessionToken} />} />
        <Route path="/movie/:id" element={<MovieEditRob token={sessionToken} />} />
        {/* <Route path="/movie/:id" element={<MovieEdit token={sessionToken} />}/> */}
      </Routes>
    </div>
  );
}

export default App;


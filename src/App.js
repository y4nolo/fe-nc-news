import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Articles from "./Components/Articles/Articles";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Articles />
    </div>
  );
}

export default App;

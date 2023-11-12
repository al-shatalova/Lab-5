import React from "react";
import "./App.css";
 
import Posts from "./components/Posts";
import Navbar from "./components/RestNav"
import Button from "./components/RestNav"
 
const App = () => {
    return (
        <div className="main-container" style={{backgroundColor: "#bdc0c5"}}>
            <Navbar />
            <Posts />
            <Button />
        </div>
    );
};
 
export default App;
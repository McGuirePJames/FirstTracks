import HomeHOC from "../../HOCs/Home/HomeHOC";
import React from "react";
import ReactDOM from "react-dom";

console.log('trying to render');

ReactDOM.render(
    <HomeHOC />,
    document.getElementById('mount')!
);
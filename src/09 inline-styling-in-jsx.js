//inline-styling-in-jsx.js

import React from 'react';
import {createRoot} from "react-dom/client";

const customStyling = { 
    color: "red",
    fontSize: "160px",
    border: "1px solid black"

};

customStyling.color = "blue";

const root = createRoot(document.getElementById('root'));
root.render(
<h1 style={customStyling}>Hello World</h1>
);
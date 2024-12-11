//28 conditional-rendering.js

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App_28";


const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
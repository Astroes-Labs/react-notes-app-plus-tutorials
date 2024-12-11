//41 managing-a-component-tree.js
import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App_41";


const root = createRoot(document.getElementById('root'));
root.render(
   <App />
);

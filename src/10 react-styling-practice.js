//react-styling-practice.js

import React from 'react';
import {createRoot} from "react-dom/client";

const customStyle = {
    color: "black"
}
function checkTime() {
    //var date = new Date();
    var date = new Date("Fri Nov 29 2024 19:30:00");
    var hours = date.getHours()

    if (hours < 12) {
        customStyle.color = "red";
        return "Morning";
    }else if (hours < 18) {
        customStyle.color = "green";
        return "Afternoon";
    }else {        
        customStyle.color = "blue";
        return "Evening";
    }
}
const greeting = checkTime();

const root = createRoot(document.getElementById('root'));
root.render(
<div>
    <h1 className="heading" style={customStyle}>Good {greeting}</h1>
</div>
);

//jsx-practice.js
import React from 'react';
import {createRoot} from "react-dom/client";

const name = "Astroes-Labs";
const currentDate = new Date();
const year = currentDate.getFullYear();


ReactDOM.render(
    <div>
        <p>
            Created by {name}
        </p>
        <p>
            Copyright {year}
        </p>
    </div>,
    document.getElementById("root")
);
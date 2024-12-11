//13 es6 import-export-modules-completed.js
import { createRoot } from "react-dom/client";
import React from "react";
//default can be imported using any name form the below but the extra imports must match the name on the math_13.js file
import pie, {doublePi, triplePi} from "./math_13.js";
//wildcard import
import * as pi from "./math_13.js";

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <ul>
            <li>{pie} {pi.default}</li>
            <li>{doublePi()} {pi.doublePi()}</li>
            <li>{triplePi()} {pi.triplePi()}</li>
        </ul>
    </div>
);
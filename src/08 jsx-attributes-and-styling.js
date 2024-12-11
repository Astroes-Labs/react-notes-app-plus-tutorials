//jsx-attributes-and-styling.js
import React from 'react';
import {createRoot} from "react-dom/client";



ReactDOM.render(
    <div>
        <h1 className='heading' contentEditable="true" spellCheck="false">My Favourite Foods</h1>
        <div className='imgHolder'>

            <img src="file:///C:/Users/evang/Pictures/author_banner.jpg" alt="" />
            <img src="file:///C:/Users/evang/Pictures/author_banner.jpg" alt="" />
            <img src="file:///C:/Users/evang/Pictures/author_banner.jpg" alt="" />
        </div>
    </div>,
    document.getElementById("root")
);
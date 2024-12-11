import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight"; // Updated import path

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon /> {/* Correct usage of the icon */}
        Notes
      </h1>
    </header>
  );
}

export default Header;

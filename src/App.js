import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/common/navbar";

function App() {
  const navLinks = ["Landing", "About", "Projects", "Contacts"];
  const [nav, setNav] = useState(navLinks[0]);

  const handleNavChange = newNav => {
    setNav(newNav);
  };

  return (
    <div className="App">
      <Navbar
        brand="KV"
        currentItem={nav}
        allItems={navLinks}
        onNavChange={handleNavChange}
      />
    </div>
  );
}

export default App;

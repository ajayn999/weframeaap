import React, { useState } from "react";
import { Home, Navbar } from "./components";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="container">
      <Navbar open={open} />

      <div className="sidebar">
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div className="home">
        <div className="box" style={{ width: open ? "270px": "100px"}}></div>
        <Home />
      </div>
    </div>
  );
};

export default App;

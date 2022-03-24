import React from "react";
import "./components/reading.js";
import "./components/chart.js";
import "./components/frontpage.js";
import Content from "./content";
import Sidebar from "./sidebar";
import "./index.css";
import "./basscss.css";

function App() {
  return (
    <div
      className="background shadow-2 flex overflow-hidden"
      data-testid="apptest"
    >
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;

import React from "react";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";
import MainConten from "./MainContent";

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <SideMenu />
      <MainConten />
    </div>
  );
}

export default App;

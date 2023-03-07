import { useState } from "react";

export default function NavBar() {
  return (
    <nav>
      <div id="left">
        <div id="Menu"></div>
        <div id="Logo"></div>
      </div>
      <div id="center">
        <div id="Search"></div>
        <div id="Mic"></div>
      </div>
      <div id="right">
        <div id="upload"></div>
        <div id="notifs"></div>
        <div id="Account"></div>
      </div>
    </nav>
  );
}

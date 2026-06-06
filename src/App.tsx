import React from "react";
import Piano from "./components/Piano";

export default function MyApp() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        maxWidth: "80vw",
        maxHeight: "80vh",
        height: "80vh",
      }}
    >
      <h1>Piano Keyboard</h1>
      <Piano />
    </div>
  );
}

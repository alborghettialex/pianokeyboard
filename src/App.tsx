import React from "react";
import Button from "./components/PianoKey";

export default function MyApp() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Piano Keyboard</h1>
      <Button label="C" isBlack={false} />
      <Button label="C#" isBlack={true} />
    </div>
  );
}

import { useState } from "react";
import playNote from "../hooks/PianoSounds";

export default function PianoKey({
  label,
  isBlack,
}: {
  label: string;
  isBlack: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle: React.CSSProperties = isBlack
    ? {
        backgroundColor: isHovered ? "#333" : "black",
        color: "white",
        width: "5%",
        height: "40%",
        borderRadius: "0 0 4% 4%",
        position: "absolute",
        zIndex: 2,
        transform: "translateX(-50%)",
        cursor: "pointer",
        transition: "background-color 0.1s ease",
      }
    : {
        backgroundColor: isHovered ? "#ebebeb" : "white",
        color: "black",
        width: "10%",
        height: "100%",
        borderRadius: "0 0 6% 6%",
        border: "1% solid #ccc",
        zIndex: 1,
        cursor: "pointer",
        transition: "background-color 0.1s ease",
      };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => playNote(label)}
    >
      {label}
    </button>
  );
}

import { useState } from "react";
import { playNote, usePlayNote } from "../hooks/PianoSounds";

export default function PianoKey({
  label,
  isBlack,
  keyNote,
}: {
  label: string;
  isBlack: boolean;
  keyNote: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  usePlayNote(keyNote, label, () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  });

  const buttonStyle: React.CSSProperties = isBlack
    ? {
        backgroundColor: isClicked ? "#667" : isHovered ? "#333" : "black",
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
        backgroundColor: isClicked
          ? "#d0d0d0"
          : isHovered
            ? "#ebebeb"
            : "white",
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
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      onClick={() => playNote(label)}
    >
      {label}
    </button>
  );
}

import { useEffect } from "react";

export function playNote(noteName: string) {
  const audio = new Audio(`/audio/${noteName}.mp3`);
  audio.play();
}

export function usePlayNote(
  key: string,
  noteName: string,
  onPress?: () => void,
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === key.toLowerCase()) {
        playNote(noteName);
        onPress?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, noteName, onPress]);
}

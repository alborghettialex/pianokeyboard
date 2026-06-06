export default function playNote(noteName: string) {
  const audio = new Audio(`/audio/${noteName}.mp3`);
  audio.play();
}

import PianoKey from "./PianoKey";
export default function Piano() {
  return (
    <div style={{ height: "100%" }}>
      <PianoKey label="C" isBlack={false} />
      <PianoKey label="C#" isBlack={true} />
      <PianoKey label="D" isBlack={false} />
      <PianoKey label="D#" isBlack={true} />
      <PianoKey label="E" isBlack={false} />
      <PianoKey label="F" isBlack={false} />
      <PianoKey label="F#" isBlack={true} />
      <PianoKey label="G" isBlack={false} />
      <PianoKey label="G#" isBlack={true} />
      <PianoKey label="A" isBlack={false} />
      <PianoKey label="A#" isBlack={true} />
      <PianoKey label="B" isBlack={false} />
    </div>
  );
}

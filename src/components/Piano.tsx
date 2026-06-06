import PianoKey from "./PianoKey";
export default function Piano() {
  return (
    <div style={{ height: "100%" }}>
      <PianoKey label="C4" isBlack={false} />
      <PianoKey label="Db4" isBlack={true} />
      <PianoKey label="D4" isBlack={false} />
      <PianoKey label="Eb4" isBlack={true} />
      <PianoKey label="E4" isBlack={false} />
      <PianoKey label="F4" isBlack={false} />
      <PianoKey label="Gb4" isBlack={true} />
      <PianoKey label="G4" isBlack={false} />
      <PianoKey label="Ab4" isBlack={true} />
      <PianoKey label="A4" isBlack={false} />
      <PianoKey label="Bb4" isBlack={true} />
      <PianoKey label="B4" isBlack={false} />
    </div>
  );
}

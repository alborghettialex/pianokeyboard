import PianoKey from "./PianoKey";
export default function Piano() {
  return (
    <div style={{ height: "100%" }}>
      <PianoKey label="C4" isBlack={false} keyNote="a" />
      <PianoKey label="Db4" isBlack={true} keyNote="w" />
      <PianoKey label="D4" isBlack={false} keyNote="s" />
      <PianoKey label="Eb4" isBlack={true} keyNote="e" />
      <PianoKey label="E4" isBlack={false} keyNote="d" />
      <PianoKey label="F4" isBlack={false} keyNote="f" />
      <PianoKey label="Gb4" isBlack={true} keyNote="t" />
      <PianoKey label="G4" isBlack={false} keyNote="g" />
      <PianoKey label="Ab4" isBlack={true} keyNote="y" />
      <PianoKey label="A4" isBlack={false} keyNote="h" />
      <PianoKey label="Bb4" isBlack={true} keyNote="u" />
      <PianoKey label="B4" isBlack={false} keyNote="j" />
    </div>
  );
}

export default function PianoKey({
  label,
  isBlack,
}: {
  label: string;
  isBlack: boolean;
}) {
  return (
    <button
      style={{
        backgroundColor: isBlack ? "black" : "white",
        color: isBlack ? "white" : "black",
        width: "30px",
        height: "100px",
        borderRadius: "8%",
      }}
    >
      {label}
    </button>
  );
}

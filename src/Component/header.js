import "./headerModule.css";

export default function screen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "red" }}>
        <input className="search" placeholder="Enter Something"></input>
      </div>
      <div
        style={{
          backgroundColor: "yellow",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p className="paragraph">asad</p>
        <p className="paragraph">ullah</p>
        <p className="paragraph">tariq</p>
      </div>
      <div style={{ backgroundColor: "purple" }}>tariq</div>
    </div>
  );
}

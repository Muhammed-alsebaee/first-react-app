import "./btnStyle.css";
export default function Menu({ postKey, toggleVisibility }) {
  const elmStyle = {
    margin: "25px",
    border: " 5px solid teal",
  };
  return (
    <div>
      <div style={elmStyle}>
        <button
          onClick={() => toggleVisibility("post1")}
          className={"btnStyle"}
        >
          Button-1
        </button>
        <button
          onClick={() => toggleVisibility("post2")}
          className={"btnStyle"}
        >
          Button-2
        </button>
        <button
          onClick={() => toggleVisibility("post3")}
          className={"btnStyle"}
        >
          Button-3
        </button>
        <button
          onClick={() => toggleVisibility("post4")}
          className={"btnStyle"}
        >
          Button-4
        </button>
      </div>
    </div>
  );
}

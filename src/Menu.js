import "./btnStyle.css";
export default function Menu() {
  const elmStyle = {
    margin: "25px",
    border: " 5px solid teal",
  };
  return (
    
      <div>
        <button style={elmStyle}>Button-1</button>
        <button style={elmStyle}>Button-2</button>
        <button style={elmStyle}>Button-3</button>
        <button style={elmStyle}>Button-4</button>
      </div>
    
  );
}

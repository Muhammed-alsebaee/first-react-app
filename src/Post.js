export default function Post({ postName = "No title", postBody = "No Body" }) {
  const elmStyle = {
    padding: "10px",
    border: " 5px solid teal",
    margin: "25px",
  };

  return (
    <div style={elmStyle}>
      <h2>{postName}</h2>
      <hr />
      <p>{postBody}</p>
    </div>
  );
}

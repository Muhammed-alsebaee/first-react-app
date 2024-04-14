export default function ({
  personName,
  email,
  age,
  content = "No Content",
  children,
}) {
  return (
    <>
      <div
        style={{
          background: "black",
          boxShadow: "0px 10px gray",
          color: "white",
          margin: "10px",
        }}
      >
        <h1>{personName}</h1>
        <h3>{email}</h3>
        <h3>{age}</h3>
        <hr></hr>
        <p>{children}</p>
      </div>
    </>
  );
}

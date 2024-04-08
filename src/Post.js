export default function Post({ isVisible, postKey }) {
    if (!isVisible) return null;
    
    const elmStyle= {
        padding:"10px",
        border:" 5px solid teal",
        margin:"25px",

    } 

    return(
<div style={elmStyle}>
<h2>This is The Post Title</h2>
<hr />
<p>This is The Post Body</p>
</div>
    );
}
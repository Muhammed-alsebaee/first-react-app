import "./FirstComponentStyle.css"

export default function MyFirstComponent(){

    const person = {
        name:"Mami",
        email:"Mami@gmail",
    };

    const elmStyle = {
    
        backgroundColor :"blue",
        fontSize : "20px",
        boxShadow:"0px 20px 10px black",


    };
    return(
    <div>
    <h1 style={elmStyle}>{person.name} Hello World</h1>
    <h2 className={"active redBg"}>{person.email} This is YOur Email</h2>
    <h1 className={person.name == "Mami"? "redBg" : "blueBg"}>Check Name</h1>
    <button onClick={sayHello}>Click me</button>
    </div>
    );
}

function sayHello(){
    alert("Hello")
}    
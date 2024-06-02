import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Menu from "./Menu";
import Articale from "./Articale";
function App() {
  const posts = [
    {
      id: 1,
      postName: "Mami",
      postBody: "uskudar",
    },
    {
      id: 2,
      postName: "Emel",
      postBody: "fsm",
    },
    {
      id: 3,
      postName: "Abd",
      postBody: "ukarabuk",
    },
    {
      id: 4,
      postName: "Yamin",
      postBody: "biruni",
    },
  ];

  const postsList = posts.map((post) => {
    return <Post key={post.id} postName={post.postName} />;
  });

  const tasks = [
    { id: 1, title: "Doing my homework" },
    { id: 2, title: "Play Tens" },
    { id: 3, title: "Go to Home" },
    { id: 4, title: "fjdhgvb" },
  ];
  const myTasksList = tasks.map((task) => {
    return (
      <div style={{ background: "blue" }} key={task.id}>
        <h1>{task.title}</h1>
      </div>
    );
  });
  const firstArticle = `
 djksfhgbjkdfkjhg
 fhjgbvfdjv
 `;
  const secondArticle = `
 jkdhfgdkj
 fkdjghjkdhgs;kljg
 `;

  return (
    <div className="App">
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ background: "", display: "flex", width: "60%" }}>
          <div style={{ width: "70%" }}>
            <div>{postsList}</div>
          </div>
          <div style={{ width: "30%" }}>
            <Menu />
          </div>
        </div>
      </div>
      <div>
        <Articale
          personName="Emel"
          email="Emel@fsm"
          age="22"
          content={firstArticle}
        >
          <h1>Hello Emel</h1>
        </Articale>
        <Articale
          personName="Mami"
          email="Mami@uskudar"
          age="21"
          content={secondArticle}
        >
          
        </Articale>
        <Articale personName="Abd" email="Abd@karabuk" age="22" />
      </div>
      <div>
        <ul>{myTasksList}</ul>
      </div>
    </div>
  );
}

export default App;

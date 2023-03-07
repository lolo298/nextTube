import { useState } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./navBar";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function Tuto() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
let root = createRoot(document.getElementById("app"));
root.render(<HomePage />);

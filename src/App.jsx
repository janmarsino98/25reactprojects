import { useState } from "react";
import "./App.css";
import Article from "./components/desplegable/Article";
import data from "./components/desplegable/dataDesplegable.json";

function App() {
  const { data: userData } = data;

  const [openArticleId, setOpenArticleId] = useState(null);
  const [oneOnly, setOneOnly] = useState(true);

  const handleArticleClick = (id) => {
    if (openArticleId === id) {
      setOpenArticleId(null);
    } else {
      setOpenArticleId(id);
    }
  };
  return (
    <>
      <div className="text-8xl">First div</div>
      <button
        onClick={() => setOneOnly(!oneOnly)}
        className="border border-black p-1 ml-2 rounded"
      >
        {oneOnly ? "Show several" : "Show only one"}
      </button>
      {userData.map((user) => {
        return (
          <Article
            key={user.id}
            id={user.id}
            name={user.firstName}
            lastName={user.lastName}
            story={user.story}
            isOpen={user.id === openArticleId}
            onClick={() => handleArticleClick(user.id)}
          ></Article>
        );
      })}
    </>
  );
}

export default App;

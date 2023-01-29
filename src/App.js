import { useState } from "react";
function App() {
  const [suggestions, setSuggestions] = useState("");
  const [clicked, setClicked] = useState(false);
  const handleClick = async () => {
    const res = await fetch("https://www.boredapi.com/api/activity");
    const data = await res.json();
    console.log(data);
    setClicked(true);
    return setSuggestions(data);
  };

  return (
    <div className="App">
      <h1>I'm Bored!...What should I do ???</h1>
      <button className="btn" onClick={handleClick}>
        Need Random Suggestions🥺?
      </button>
      {clicked ? (
        <>
          <h2 style={{color:"teal", fontSize:"5rem"}}>You can do {suggestions.activity}</h2>
        </>
      ) : null}
    </div>
  );
}

export default App;

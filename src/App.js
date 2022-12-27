import "./App.css";
import { useEffect, useState } from "react";

const API_URL = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setAdvice(data.slip.advice);
  };

  return (
    <div className="App">
      <div className="card">
        <h2>{advice}</h2>
        <button className="button" onClick={fetchAdvice}>
          <span>Another advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(
    "If you're here, who's running hell?"
  );

  const generateQuote = async (e) => {
    try {
      const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
      const res = await fetch(url);
      const data = await res.json();
      setQuote(data[0].quote);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h3 className="card-content">{quote}</h3>
        </div>
      </div>
      <div class="wrapper">
        <a href="#">
          <span onClick={generateQuote}>New Quote</span>
        </a>
      </div>
    </>
  );
}

export default App;

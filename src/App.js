import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((quote) => setQuote(quote))
      .then(console.log(quote));
  }, [quote]);

  return (
    <div className="app-mobile">
      {quote ? <p>{quote.content}</p> : <p>dogs</p>}
      <p>Good MORNING, IT'S CURRENTLY</p>
      <h1>11:37</h1>
      <p></p>
    </div>
  );
}

export default App;

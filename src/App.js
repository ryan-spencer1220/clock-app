import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [date, setDate] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setQuote(quote));
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("http://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((date) => setDate(date));
    setLoading(false);
  }, []);

  return (
    <div className="app-mobile">
      {loading ? <p>Loading!</p> : <h5>{quote.content}</h5>}
      <p>Good MORNING, IT'S CURRENTLY</p>
      <h1>11:37</h1>
      <p></p>
    </div>
  );
}

export default App;

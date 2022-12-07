import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [date, setDate] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const fetchDate = async () => {
    setLoading2(true);
    fetch("http://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((date) => setDate(date))
      .then(console.log(date));
    setLoading2(false);
  };

  const fetchQuote = async () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setQuote(quote))
      .then(console.log(quote));
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
    fetchDate();
  }, []);

  // https://stackoverflow.com/questions/47607666/how-to-extract-only-time-from-iso-date-format-in-javascript
  // const formatTime = (date) => {
  //   const isoDate = new Date(date);
  //   console.log(date);
  //   let result = isoDate.match(/\d\d:\d\d/);
  //   return result[0];
  // };

  return (
    <div className="app-mobile">
      {loading ? <p>Loading!</p> : <h5>{quote.content}</h5>}
      <p>Good MORNING, IT'S CURRENTLY</p>
      {console.log(date)}
      <h1>{new Date(date.datetime).toLocaleTimeString()}</h1>
      <p></p>
    </div>
  );
}

export default App;

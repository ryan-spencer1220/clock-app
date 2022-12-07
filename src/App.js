import { useEffect, useState } from "react";
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

function App() {
  const [quote, setQuote] = useState({});
  const [date, setDate] = useState({});
  const [loading, setLoading] = useState(false);
  // const [loading2, setLoading2] = useState(false);

  const fetchDate = async () => {
    fetch("http://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((date) => setDate(date));
  };

  const fetchQuote = async () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setQuote(quote));
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    fetchDate();
  }, [date]);

  return (
    <div className="app-mobile">
      {loading ? (
        <p>Loading!</p>
      ) : (
        <div>
          <h5>{quote.content}</h5>
          <h5>{quote.author}</h5>
        </div>
      )}
      {new Date(date.datetime).getHours() <= 12 ? (
        <div>
          <HiSun />
          <p>GOOD MORNING, IT'S CURRENTLY</p>
        </div>
      ) : (
        <div>
          <HiMoon />
          <p>GOOD EVENING, IT'S CURENTLY</p>
        </div>
      )}
      <h1>
        {new Date(date.datetime)
          .toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
          .slice(0, -2)}
      </h1>
    </div>
  );
}

export default App;

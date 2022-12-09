import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./assets/desktop/icon-sun.svg";
import { ReactComponent as Moon } from "./assets/desktop/icon-moon.svg";
import { ReactComponent as Refresh } from "./assets/desktop/icon-refresh.svg";
import { ReactComponent as ArrowDown } from "./assets/desktop/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "./assets/desktop/icon-arrow-up.svg";

function App() {
  const [quote, setQuote] = useState({});
  const [date, setDate] = useState({});
  // const [location, setLocation] = useState({});

  const fetchDate = async () => {
    fetch("http://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((date) => setDate(date));
  };

  const fetchQuote = async () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => setQuote(quote));
  };

  // const fetchLocation = async () => {
  //   fetch(
  //     "https://api.ipbase.com/v2/info?apikey=ofnqlgfnh16MbaTX97gys5LRSunewNsfpodZTp6f&ip=1.1.1.1"
  //   )
  //     .then((res) => res.json())
  //     .then((location) => setLocation(location));
  // };

  useEffect(() => {
    fetchQuote();
    // fetchLocation();
  }, []);

  useEffect(() => {
    fetchDate();
  }, [date]);

  return (
    <div className="app-mobile">
      <div className="group5">
        <p className="quote">"{quote.content}"</p>
        <Refresh className="refresh" onClick={fetchQuote} />
        <p className="author">{quote.author}</p>
      </div>
      <div className="time-container">
        <div className="welcome">
          {new Date(date.datetime).getHours() <= 12 ? (
            <>
              <Sun />
              <p>GOOD MORNING</p>
            </>
          ) : (
            <>
              <Moon />
              <p>GOOD EVENING</p>
            </>
          )}
        </div>
        <h1>
          {new Date(date.datetime)
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
            .slice(0, -2)}
        </h1>
        <p className="timezone">{date.abbreviation}</p>
        {/* <p className="location">
            {location.data.location.city.name},{" "}
            {location.data.location.country.alpha2}
          </p> */}
        <p className="location">Portland, US</p>
      </div>
      <div className="group10">
        <div className="rectangle">
          <p className="more">MORE</p>
          <ArrowUp />
        </div>
      </div>
    </div>
  );
}

export default App;

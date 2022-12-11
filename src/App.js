import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./assets/desktop/icon-sun.svg";
import { ReactComponent as Moon } from "./assets/desktop/icon-moon.svg";
import { ReactComponent as Refresh } from "./assets/desktop/icon-refresh.svg";
import { ReactComponent as ArrowUp } from "./assets/desktop/icon-arrow-up.svg";

function App() {
  const [quote, setQuote] = useState({});
  const [date, setDate] = useState({});
  const [moreInfo, setMoreInfo] = useState(false);
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

  console.log(moreInfo);
  return (
    <div className="app-mobile">
      <div className="quote-container">
        <p className="quote">"{quote.content}"</p>
        <Refresh className="refresh" onClick={fetchQuote} />
      </div>
      <p className="author">{quote.author}</p>
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
        <p className="time">
          {new Date(date.datetime)
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
            .slice(0, -2)}
        </p>
        <p className="timezone">{date.abbreviation}</p>
        {/* <p className="location">
            {location.data.location.city.name},{" "}
            {location.data.location.country.alpha2}
          </p> */}
        <p className="location">IN PORTLAND, US</p>
      </div>
      <div className="rectangle">
        <p className="more">MORE</p>
        <div
          className="arrow"
          onClick={() => setMoreInfo(!moreInfo)}
          style={
            moreInfo
              ? {
                  transform: `rotate(180deg) scale(0.75)`,
                  paddingBottom: "0%",
                }
              : { backgroundColor: "rotate(0deg)" }
          }
        >
          <ArrowUp />
        </div>
      </div>
    </div>
  );
}

export default App;

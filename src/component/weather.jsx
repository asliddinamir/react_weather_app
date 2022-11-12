import { useEffect, useState } from "react";

export default function Weather() {
  const Base_Url = "https://api.openweathermap.org/data/2.5/weather?q=";
  const api_key = "9eace37467b19852c1760098c905c0dc";

  const [state, setState] = useState("dushanbe");
  const [statetwo, setStatetwo] = useState(null);
  const [state3, setState3] = useState(false);

  const inputValue = (e) => {
    setState(e.target.value);
  };

  const func = (e) => {
    if (e.keyCode == 13) {
      btn();
    }
  };

  useEffect(() => {
    btn();
  }, []);

  const btn = () => {
    fetch(`${Base_Url}${state}&appid=${api_key}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
      {data.name ? (setStatetwo(data), setState3(false)) : setState3(true)}
      });
  };
  return (
    <div className="weather">
      <h1 className="title">Weather App</h1>
      <div className="form">
      <button className="btn" onClick={btn}><i class="fas fa-search"></i></button>
        <input
          type="text"
          placeholder="Search For a City.."
          onChange={inputValue}
          onKeyDown={func}
        />
      </div>
      <div className="info">
        {!state3 ? (
          <h2 className="country" style={{ fontSize: "1.5rem" }}>
            {statetwo?.name},{" "}
            <span style={{ color: "yellow" }}> {statetwo?.sys.country}</span>
          </h2>
        ) : (
          <h2 className="country" style={{ fontSize: "1.5rem" }}>
            No City Found
          </h2>
        )}

        {!state3 && (
          <img
            src={`http://openweathermap.org/img/wn/${statetwo?.weather[0].icon}@2x.png`}
          />
        )}
        {!state3 && (
          <h3 className="wType" style={{ fontSize: "1.5rem", color: "#fff" }}>
            {statetwo?.weather[0].main}
          </h3>
        )}
        {!state3 && (
          <h1 className="deg" style={{ color: "greenyellow" }}>
            {Math.floor(statetwo?.main.temp)}°C
          </h1>
        )}
      </div>
      <footer>
            <h3 class="name">
                <a href="https://asliddin.com/">Asliddin Amirov </a>&copy;2022 | All
                rights reserved
            </h3>
        </footer>
    </div>
  );
}

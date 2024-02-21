import "./App.css";
import InputAndButton from "./components/inputandbutton/InputAndButton";
import Card from "./components/cards/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const tokenKey = process.env.REACT_APP_API_KEY;
function App() {
  const [place, setPlace] = useState();
  const [weatherList, setWeatherList] = useState([]);
  const handlePlaceChange = (place) => {
    setPlace(place);
  };

  const getWeather = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${tokenKey}&units=metric&lang=tr`
    );
    console.log(response.data);
    const newWeather = {
      name: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };
    setWeatherList([...weatherList, newWeather]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (place) {
          await getWeather();
        }
      } catch (error) {
        if (error.response) {
          console.error("API hatası:", error.response.data);
          alert("Şehir bulunamadı. Lütfen geçerli bir şehir adı girin.");
        } else if (error.request) {
          console.error("API'ye istek yapılamadı:", error.request);
          alert("Hava durumu bilgisi alınamadı. Lütfen tekrar deneyin.");
        } else {
          console.error("İstek yapılırken hata oluştu:", error.message);
          alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
      }
    };

    fetchData();
  }, [place]);
  return (
    <div>
      <div className="App container text-center">
        <div className="row p-3 justify-content-start">
          <div className="col">
            <InputAndButton onCityChange={handlePlaceChange}></InputAndButton>
          </div>
        </div>
      </div>
      <div className="App container justify-content-start ">
        <div className="row p-3 justify-content-start sag">
          {weatherList.map((weather, index) => (
            <div className="col-3 p-5" key={index}>
              <Card
                name={weather.name}
                temp={weather.temp}
                description={weather.description}
                icon={weather.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

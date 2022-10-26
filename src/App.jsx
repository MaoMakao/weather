import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import HourForecast from "./components/HourForecast";
import RenderWeatherContent from "./components/RenderWetherCard";

class App extends React.Component {
  state = { forecast: [], location: "" };

  getData = async (location) => {
    try {
      const res = await axios.get(
        "http://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            key: "1064ec0fbb7f4473a8f121846221510",
            days: 3,
            q: location,
          },
        }
      );
      this.setState({
        forecast: res.data.forecast.forecastday,
        location: `${res.data.location.country}, ${res.data.location.region}, ${res.data.location.name}`,
      });

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar getData={this.getData} />
        {!!this.state.forecast.length && (
          <HourForecast forecast={this.state.forecast} />
        )}
        <RenderWeatherContent
          location={this.state.location}
          forecast={this.state.forecast}
        />
      </div>
    );
  }
}

export default App;

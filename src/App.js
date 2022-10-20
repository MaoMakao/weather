import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar";
import axios from "axios";
import BarForHour from "./components/BarForHour";
const key = "1064ec0fbb7f4473a8f121846221510";
class App extends React.Component {
  state = { forecast: [], q: "" };

  getData = async (q) => {
    try {
      const res = await axios.get(
        "http://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            key: "1064ec0fbb7f4473a8f121846221510",
            days: 3,
            q,
          },
        }
      );
      this.setState({
        forecast: res.data.forecast.forecastday,
        location: `${res.data.q.country}, ${res.data.q.region}, ${res.data.q.name}`,
      });

      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar getData={this.getData} />
        <BarForHour />
      </div>
    );
  }
}

export default App;

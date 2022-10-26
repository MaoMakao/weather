import React from "react";
import WeatherCard from "./WeatherCard";

class RenderWeatherContent extends React.Component {
  renderContent() {
    return this.props.forecast.map((day, i) => {
      return (
        <div key={i}>
          <WeatherCard day={day} location={this.props.location} />
        </div>
      );
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "15px",
        }}
      >
        {this.renderContent()}
      </div>
    );
  }
}

export default RenderWeatherContent;

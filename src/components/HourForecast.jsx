import { Fab, Slider } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

class HourForecast extends React.Component {
  state = { day: 0, data: "" };

  getStringDate = (date) => {
    return new Date(date).toLocalString("en", {
      month: "long",
      week: "long",
      day: "numeric",
    });
  };

  nextDay = () => {
    if (this.state.day < this.props.forecast.length - 1) {
      this.setState({ day: this.state.day + 1 });
    } else {
      this.setState({ day: 0 });
    }
  };

  prevDay = () => {
    if (this.state.day > 0) {
      this.setState({ day: this.state.day - 1 });
    } else {
      this.setState({ day: this.props.forecast.length - 1 });
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Fab onClick={this.prevDay} sx={{ mr: "20px" }} size="medium">
            <KeyboardDoubleArrowLeftIcon />
          </Fab>
          <Typography
            sx={{ weight: "200px", textAlign: "center" }}
            variant="h4"
            component="div"
          >
            {this.response(this.props.forecast[this.state.day].date)}
          </Typography>
          <Fab onClick={this.nextDay} sx={{ mr: "20px" }} size="medium">
            <KeyboardDoubleArrowRightIcon />
          </Fab>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alighItems: "center",
          }}
        >
          {this.props.forecast[this.state.day].hour.map((hour, i) => {
            return (
              <div key={i}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: "20px",
                    width: 50,
                    height: 250,
                  }}
                >
                  <Slider
                    orientation="vertical"
                    aria-label="Temperature"
                    color="primary"
                    value={hour.temp_c}
                    valueLabelDisplay="auto"
                    min={this.props.forecast[this.state.day].day.mintemp_c - 10}
                    max={this.props.forecast[this.state.day].day.maxtemp_c + 20}
                  />
                </Box>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HourForecast;

import { Fab } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Typography from "@mui/material/Typography";

class BarForHour extends React.Component {
  state = { day: 0, data: "" };

  response = (date) => {
    return new Date(date).toLocalString("en", {
      month: "long",
      week: "long",
      day: "numeric",
    });
  };

  ArrowRight = () => {
    if (this.state.day < this.props.forecast.length - 1) {
      this.setState({ day: this.state.day + 1 });
    } else {
      this.setState({ day: 0 });
    }
  };

  ArrowLeft = () => {
    if (this.state.day > 0) {
      this.setState({ day: this.state.day - 1 });
    } else {
      this.setState({ day: this.props.forecast.length - 1 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Fab onClick={this.ArrowLeft} sx={{ mr: "20px" }} size="medium">
            <KeyboardDoubleArrowLeftIcon />
          </Fab>
          <Typography
            sx={{ weight: "200px", textAlign: "center" }}
            variant="h4"
            component="div"
          >
            {this.response(this.props.forecast[this.state.day].date)}
          </Typography>
          <Fab onClick={this.ArrowRight} sx={{ mr: "20px" }} size="medium">
            <KeyboardDoubleArrowRightIcon />
          </Fab>
        </div>
      </React.Fragment>
    );
  }
}

export default BarForHour;

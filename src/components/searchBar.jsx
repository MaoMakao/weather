import React from "react";
import { TextField, Fab } from "@mui/material";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  ChengeSearch() {
    if (this.state.input.length) {
      this.props.getData(this.state.input);
    } else {
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.props.getData(
          `${position.coords.latitude},${position.coords.longitude}`
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Container sx={{ mt: "20px" }} maxWidth="sm">
          <form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
              fullWidth
              size="small"
            />
            <Fab onClick={() => this.ChengeSearch()}>
              {(this.state.input.length) ? <SearchIcon/> : <TravelExploreIcon/>}
            </Fab>
          </form>
        </Container>
      </div>
    );
  }
}

export default SearchBar;

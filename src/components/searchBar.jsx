import React from "react";
import { TextField, Button } from "@mui/material";
import { Container } from "@mui/system";


class SearchBar extends React.Component {
  
  constructor(props) {
    super(props)
     this.state = { input: "" };
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
            <Button
              onClick={() => this.props.getData(this.state.input)}
              variant="contained"
            >
              Hui
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "../components(CSS)/Main.css";
export class Search extends Component {
  render() {
    return (
      <div>
        <Form
          style={{ position: "absolute", top: "55%", left: "29%" }}
          onSubmit={this.props.explore}
          value="get movie"
          className="formStyle"
        >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search For Movie"
              name="movie"
              style={{
                textAlign: "center",
                padding: "10px",
                backgroundColor: "#d0d0d0",
                borderRadius: "15px",
                borderColor: "transparent",
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              position: "relative",
              bottom: "61px",
              left: "458px",
              padding: "9px",
              backgroundColor: "rgb(208 208 208)",
              borderRadius: "15px",
              borderColor: "transparent",
              //   color: "rgb(208 208 208)",
              //   fontWeight: "700",
            }}
          >
            {" "}
            🔍{" "}
          </Button>
        </Form>
      </div>
    );
  }
}

export default Search;

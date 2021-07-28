import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../components(CSS)/HomePage.css";

export class SearchMovie extends Component {
  render() {
    return (
      <div>
        {this.props.showSearch && (
          <h2  className="search-titel">{`Results of : ${this.props.targetSearch} `}</h2>
        )}
        <div className="searchDiv">
          {this.props.showSearch &&
            this.props.movieSearchData.map((movie, index) => {
              return (
                <Card
                  key={index}
                  style={{ width: "18rem" }}
                  className="slider-card"
                >
                  <Card.Img
                    variant="top"
                    className="card-image"
                    onClick={() => this.props.getTrailerForSearch(index)}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <div className="details">
                    <h2>{movie.title}</h2>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    );
  }
}

export default SearchMovie;

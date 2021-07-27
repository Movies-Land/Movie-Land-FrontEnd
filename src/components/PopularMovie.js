import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components(CSS)/HomePage.css";

export class PopularMovie extends Component {
  render() {
    let settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      // autoplay: true,
      // autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider-div">
        {this.props.show && <h2 className="title-2"> Popular Movie </h2>}
        <Slider {...settings} style={{ margin: "30px" }}>
          {this.props.show &&
            this.props.popularMovie.map((movie, index) => {
              return (
                <Card
                  key={index}
                  style={{ width: "18rem" }}
                  className="slider-card"
                >
                  <Card.Img
                    variant="top"
                    className="card-image"
                    onClick={() => this.props.getTrailerForPopularMovie(index)}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <div className="details">
                    <h2>{movie.title}</h2>
                  </div>
                </Card>
              );
            })}
        </Slider>
      </div>
    );
  }
}

export default PopularMovie;

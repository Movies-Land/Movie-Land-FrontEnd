
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components(CSS)/modal.css";

import {
  Modal,
  Button,
  ListGroup,
  ListGroupItem,
  Tab,
  Tabs,
} from "react-bootstrap";

import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'

export class MovieModal extends Component {
    constructor(props) {
        super(props)
        this.state = {

            currentMovieObject: {},
            favoriteMovies: [],
            

        }
    }



    addToFavorites = async () => {
        await this.setState({
            currentMovieObject: {

                email: this.props.auth0.user.email,
                title: this.props.title,
                overview: this.props.overview,
                release_date: this.props.release_date,
                vote_average: this.props.vote_average,
                vote_count: this.props.vote_count,
                popularity: this.props.popularity,
                movieId: this.props.movieId,
                trailerKey: this.props.trailerKey,
                poster: this.props.poster,

            }

        })
 
        console.log( this.state.currentMovieObject);
        let favoriteMovies = await axios.post('http://localhost:3001/favoriteMovies', this.state.currentMovieObject);

        this.setState({
            favoriteMovies: favoriteMovies.data,
            
        })

        console.log(this.state.favoriteMovies)

    }
  render() {
    return (
      <Modal
        style={{}}
        show={this.props.show}
        onHide={this.props.handleClose}
        className="main-modal"
      >
        <Modal.Body className="body-modal" style={{ padding: "0rem" }}>
          <iframe
            className="iframeV"
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${this.props.trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Tabs
            defaultActiveKey="Overview"
            id="uncontrolled-tab-example"
            className="mb-3"
            // style={{ color: "#201e23 " }}
          >
            <Tab eventKey="Overview" title="Overview" className="tap">
              <h2 className="movie-title">{this.props.title}</h2>
              <p className="overview p-modal"> {this.props.overview} </p>
            </Tab>
            <Tab eventKey="Details" title="Details" className="tap">
              <h2 className="movie-title">{this.props.title}</h2>
              <ListGroup>
                <ListGroupItem
                  style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
                  className="list-group-flush"
                >{`Release Date: ${this.props.release_date}`}</ListGroupItem>
                <ListGroupItem
                  style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
                  className="list-group-flush"
                >{`Popularity: ${this.props.popularity}`}</ListGroupItem>
                <ListGroupItem
                  style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
                  className="list-group-flush"
                >{`Vote Count: ${this.props.vote_count}`}</ListGroupItem>
                <ListGroupItem
                  style={{ color: "#201e23 ", backgroundColor: "#d0d0d0 " }}
                  className="list-group-flush"
                >{`Average Vote: ${this.props.vote_average}`}</ListGroupItem>
              </ListGroup>
            </Tab>
          </Tabs>
        <Modal.Footer
          className="footer-modal"
          style={{ borderTop: "0px solid #dee2e6" }}
        >
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          {this.props.auth0.isAuthenticated ?  <Button variant="secondary" onClick={this.addToFavorites}>
                        Add To Favorites
                    </Button>:''} 
        </Modal.Footer>
        </Modal.Body>
      </Modal>
    );
  }
}

export default withAuth0(MovieModal);

import React, { Component } from 'react'
import { Modal, Button, Card, ListGroup, ListGroupItem, Tab, Tabs, } from 'react-bootstrap'
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

            }
        })

        let favoriteMovies = await axios.post('http://localhost:3001/favoriteMovies', this.state.currentMovieObject);

        this.setState({
            favoriteMovies: favoriteMovies.data,
        })

        console.log(this.state.favoriteMovies)

    }



    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header>
                    <Card.Title>{this.props.title}</Card.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="400" height="200" src={`https://www.youtube.com/embed/${this.props.trailerKey}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                    <Tabs defaultActiveKey="Overview" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Overview" title="Overview" >
                            <p className='overview'> {this.props.overview} </p>
                        </Tab>
                        <Tab eventKey="Details" title="Details">
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{`Release Date: ${this.props.release_date}`}</ListGroupItem>
                                <ListGroupItem>{`Popularity: ${this.props.popularity}`}</ListGroupItem>
                                <ListGroupItem>{`Vote Count: ${this.props.vote_count}`}</ListGroupItem>
                                <ListGroupItem>{`Average Vote: ${this.props.vote_average}`}</ListGroupItem>
                            </ListGroup>
                        </Tab>
                    </Tabs>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={this.addToFavorites}>
                        Add To Favorites
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default withAuth0(MovieModal)

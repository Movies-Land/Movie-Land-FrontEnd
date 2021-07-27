import React, { Component } from 'react'
import { Modal, Button,  ListGroup, ListGroupItem, Tab, Tabs, } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "../components(CSS)/modal.css";


export class ProfileModel extends Component {

    render() {
        return (
            <div>
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
                            <Button variant="secondary" onClick={() => this.props.deleteMovie(this.props.index)}>
                                Remove From Favorites
                            </Button>
                        </Modal.Footer>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default ProfileModel


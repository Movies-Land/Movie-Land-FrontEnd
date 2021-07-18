import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: [],
            show: false
        }
    }

    componentDidMount = async () => {

        // const { user } = this.props.auth0;

        let movieData = await axios.get(`http://localhost:3001/movie?userEmail=ibrahem.sarayrah@gmail.com`)
        await this.setState({
            movieData: movieData.data,
            show: true
        })
        console.log(movieData.data);
    }

    render() {
        return (
            <div style={{display:'flex', flexWrap:'nowrap' , flexDirection:'row', justifyContent:'center'}}>
                {this.state.show &&
                    this.state.movieData.map((movie, index) => {
                        return (

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={movie.Poster} />
                                            <Card.Body>
                                                <Card.Title>{movie.Title}</Card.Title>
                                                <Card.Text>
                                                    {movie.Plot}
                                                </Card.Text>
                                                <Card.Text>
                                                    {movie.Released}
                                                </Card.Text>
                                                <Card.Text>
                                                    {movie.Language}
                                                </Card.Text>
                                                <Card.Text>
                                                    {movie.Genre}
                                                </Card.Text>
                                                <Card.Text>
                                                    {movie.imdbRating}
                                                </Card.Text>
                                                <iframe width="400" height="200" src='https://www.youtube.com/embed/YIUPVpqNjppyCWOZfL-19bLb7uk'
                                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                            </Card.Body>

                                        </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default HomePage

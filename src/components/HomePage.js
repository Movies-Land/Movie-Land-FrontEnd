import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: [],
            show: false,
            movieId:{}
        }
    }

    componentDidMount = async () => {
        let movieData = await axios.get(`http://localhost:3001/popularMovie`)
        await this.setState({
            movieData: movieData.data,
            show: true
        })
        console.log(movieData.data);
    }

    // getTrailerByMovieId = (index) => {
    //     let movieId = this.state.movieData.find(data =>{
    //         if (data.id === id){
    //             return data
    //         }
    //         console.log(data.id);
    //     })

    //             this.setState({
    //         movieId:movieId
    //     })
    //     console.log(this.state.movieId);
    // }

    getTrailerByMovieId = async (index) => {
        await this.setState({
            index:index,
            movieId:this.state.movieData[index].id
        })
        console.log(this.state.movieId);
    }

    render() {
        return (
            <div style={{display:'flex', flexWrap:'wrap' , flexDirection:'row', justifyContent:'center' , flexBasis:'33.333333%'}}>
                {this.state.show &&
                    this.state.movieData.map((movie, index) => {
                        return (

                                        <Card key={index} style={{ width: '18rem' }}>
                                            <Card.Img variant="top" 
                                            onClick={() => this.getTrailerByMovieId(index)}
                                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                            <Card.Body>
                                                <Card.Title>{movie.title}</Card.Title>
                                                <Card.Text>
                                                    {movie.overview}
                                                </Card.Text>
                                                <Card.Text>
                                                    {movie.release_date}
                                                </Card.Text>
                                                <Card.Text>
                                                    {movie.vote_average}
                                                </Card.Text>
                                                <Card.Text>
                                                    {movie.vote_count}
                                                </Card.Text>
                                                <Card.Text>
                                                    {movie.id}
                                                </Card.Text>
                                                {/* <iframe width="400" height="200" src='https://www.youtube.com/embed/YIUPVpqNjppyCWOZfL-19bLb7uk'
                                                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

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

import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import MovieModal from './MovieModal';
import 'bootstrap/dist/css/bootstrap.min.css';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: [],
            show: false,
            movieId: '',
            trailerKey: '',
            index: 0,
            title: '',
            overview: '',
            release_date: '',
            vote_average: '',
            vote_count: '',
            popularity: '',
            showModal: '',

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


    getTrailerByMovieId = async (index) => {
        await this.setState({
            index: index,
            movieId: this.state.movieData[index].id,
            title: this.state.movieData[index].title,
            overview: this.state.movieData[index].overview,
            release_date: this.state.movieData[index].release_date,
            vote_average: this.state.movieData[index].vote_average,
            vote_count: this.state.movieData[index].vote_count,
            popularity: this.state.movieData[index].popularity,
            showModal: true
        })
        console.log(this.state.movieId);
        this.getTrailer()
    }

    getTrailer = async () => {

        let url = `http://localhost:3001/movieTrailer?movieId=${this.state.movieId}`

        let trailerKey = await axios.get(url)

        this.setState({
            trailerKey: trailerKey.data
        })
        console.log(this.state.trailerKey);
    }

    handleClose = () => {
        this.setState({
            showModal: false,
        })
    }

    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', flexBasis: '33.333333%' }}>
                {this.state.show &&
                    this.state.movieData.map((movie, index) => {
                        return (

                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Img variant="top"
                                    onClick={() => this.getTrailerByMovieId(index)}
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            </Card>
                        )
                    })
                }
                <MovieModal
                    title={this.state.title}
                    overview={this.state.overview}
                    release_date={this.state.release_date}
                    vote_average={this.state.vote_average}
                    vote_count={this.state.vote_count}
                    popularity={this.state.popularity}
                    movieId={this.state.movieId}
                    trailerKey={this.state.trailerKey}
                    show={this.state.showModal}
                    handleClose={this.handleClose}
                />
            </div>
        )
    }
}

export default HomePage

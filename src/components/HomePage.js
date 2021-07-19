import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import SearchMovie from './SearchMovie';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: [],
            show: false,
            movieId: {},
            trailerKey: '',
            index: 0,
            movieSearchData:{},
            targetSearch:'',
            showSearch:false,
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
            movieId: this.state.movieData[index].id
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


explore=async(event)=>{
    event.preventDefault();
    await this.setState({
        targetSearch:event.target.movie.value,
    })
    let url=`http://localhost:3001/searchForMovie?search=${this.state.targetSearch}`
    let movieSearchData=await axios.get(url);

    this.setState({
        movieSearchData:movieSearchData.data,
        showSearch:true,
        
    })
    console.log(this.state.movieSearchData);
}



    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', flexBasis: '33.333333%' }}>
                <Search explore={this.explore}/>
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
                                    <iframe width="400" height="200" src={`https://www.youtube.com/embed/${this.state.trailerKey}`}
                                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                </Card.Body>

                            </Card>
                        )
                    })
                }
<SearchMovie movieSearchData={this.state.movieSearchData} showSearch={this.state.showSearch} getTrailerByMovieId={this.getTrailerByMovieId}/>
            </div>
        )
    }
}

export default HomePage

import React, { Component } from "react";
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Button } from 'react-bootstrap';
import MovieModal from "./MovieModal";
// import '../components(CSS)/HomePage.css';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: [],
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
      poster: '', 

    }
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    let favoriteMovies = await axios.get(`http://localhost:3001/favoriteMovies?userEmail=${user.email}`);
    console.log('favoriteMovies' + favoriteMovies);

    await this.setState({
      favoriteMovies: favoriteMovies.data,
      show: true,
    })

    console.log(favoriteMovies);
  }

  deleteMovie = async (index) => {
    const { user } = this.props.auth0; 
    
    let paramsObj = { userEmail: user.email } 

    let favoriteMovies = await axios.delete(`http://localhost:3001/deleteMovie/${index}`, { params: paramsObj })
    this.setState({ favoriteMovies : favoriteMovies.data })
  }


  trailerForFavMovie = async (index) => {
    await this.setState({

        index: index,
        movieId: this.state.favoriteMovies[index].id,
        title: this.state.favoriteMovies[index].title,
        overview: this.state.favoriteMovies[index].overview,
        release_date: this.state.favoriteMovies[index].release_date,
        vote_average: this.state.favoriteMovies[index].vote_average,
        vote_count: this.state.favoriteMovies[index].vote_count,
        popularity: this.state.favoriteMovies[index].popularity,
        showModal: true,
        poster: this.state.favoriteMovies[index].poster_path,
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
    const { user, isAuthenticated } = this.props.auth0;
    console.log(isAuthenticated);
    return (
      <>
        {isAuthenticated && (
          <>
            <div>
              <div> {user.name}</div>
              <div> {user.email}</div>
              <img src={user.picture} alt={user.name} />
            </div>


            <div className='searchDiv'>
              {this.state.show &&
                this.state.favoriteMovies.map((movie, index) => {
                  return (
                    <>
                    <Card key={index} style={{ width: '18rem' }} className='slider-card'>
                      <Card.Img variant="top" className='card-image'
                        onClick={() => this.trailerForFavMovie(index)}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                      <div className='details'>
                        <h2>{movie.title}</h2>
                        <Button variant="primary" onClick={() => this.deleteMovie(index)}>Delete</Button>

                      </div>
                      
                    </Card>
                    
                    </>
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
                    addToFavorites ={this.addToFavorites}
                    poster={this.state.poster}
                    
                />
            </div>
          </>
        )}
      </>
    );
  }
}

export default withAuth0(Profile);

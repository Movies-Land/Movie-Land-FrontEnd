import React, { Component } from "react";
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import { Card } from 'react-bootstrap';
import '../components(CSS)/HomePage.css';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: [],
      show:false,
    }
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    let favoriteMovies = await axios.get(`http://localhost:3001/favoriteMovies?userEmail=${user.email}`);
    
    await this.setState({
      favoriteMovies: favoriteMovies.data,
      show:true,
    })

    console.log(favoriteMovies);
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
                            <Card key={index} style={{ width: '18rem' }} className='slider-card'>
                                <Card.Img variant="top" className='card-image'
                                    onClick={() => this.props.getTrailerForSearch(index)}
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                <div className='details'>
                                    <h2>{movie.title}</h2>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
          </>
        )}
      </>
    );
  }
}

export default withAuth0(Profile);

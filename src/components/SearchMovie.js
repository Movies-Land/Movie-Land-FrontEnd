import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class SearchMovie extends Component {
    render() {
        return (
            <div>
                {this.props.showSearch &&
                    this.props.movieSearchData.map((movie, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Img variant="top"
                                    onClick={() => this.props.getTrailerByMovieId(index)}
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default SearchMovie

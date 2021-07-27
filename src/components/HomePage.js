import React, { Component } from 'react'
import axios from 'axios'
import MovieModal from './MovieModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import SearchMovie from './SearchMovie';
import PopularMovie from './PopularMovie';
import NowPlayingMovie from './NowPlayingMovie';
import TopRatedMovie from './TopRatedMovie';
import UpcomingMovie from './UpcomingMovie';
import { MovieStyle } from '../components(CSS)/MovieStyle';
import { withAuth0 } from '@auth0/auth0-react';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popularMovie: [],
            nowPlayingMovie: [],
            topRatedMovie: [],
            upcomingMovie: [],
            movieId: '',
            trailerKey: '',
            index: 0,

            movieSearchData: {},
            targetSearch: '',

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
        let popularMovie = await axios.get(`${process.env.REACT_APP_HOST}/popularMovie`)
        let nowPlayingMovie = await axios.get(`${process.env.REACT_APP_HOST}/nowPlayingMovie`)
        let topRatedMovie = await axios.get(`${process.env.REACT_APP_HOST}/topRatedMovie`)
        let upcomingMovie = await axios.get(`${process.env.REACT_APP_HOST}/upcomingMovie`)

        await this.setState({
            popularMovie: popularMovie.data,
            nowPlayingMovie: nowPlayingMovie.data,
            topRatedMovie: topRatedMovie.data,
            upcomingMovie: upcomingMovie.data,
        })
        this.props.handleShowHomePage();
    }


    getTrailerForPopularMovie = async (index) => {
        await this.setState({
            index: index,
            movieId: this.state.popularMovie[index].id,
            title: this.state.popularMovie[index].title,
            overview: this.state.popularMovie[index].overview,
            release_date: this.state.popularMovie[index].release_date,
            vote_average: this.state.popularMovie[index].vote_average,
            vote_count: this.state.popularMovie[index].vote_count,
            popularity: this.state.popularMovie[index].popularity,
            showModal: true,
            poster: this.state.popularMovie[index].poster_path,
        })
        console.log(this.state.movieId);
        this.getTrailer()
    }


    getTrailerForNowPlayingMovie = async (index) => {
        await this.setState({
            index: index,
            movieId: this.state.nowPlayingMovie[index].id,
            title: this.state.nowPlayingMovie[index].title,
            overview: this.state.nowPlayingMovie[index].overview,
            release_date: this.state.nowPlayingMovie[index].release_date,
            vote_average: this.state.nowPlayingMovie[index].vote_average,
            vote_count: this.state.nowPlayingMovie[index].vote_count,
            popularity: this.state.nowPlayingMovie[index].popularity,
            showModal: true,
            poster: this.state.nowPlayingMovie[index].poster_path,
        })
        console.log(this.state.movieId);
        this.getTrailer()
    }

    getTrailerForNowPlayingMovie = async (index) => {
        await this.setState({
            index: index,
            movieId: this.state.nowPlayingMovie[index].id,
            title: this.state.nowPlayingMovie[index].title,
            overview: this.state.nowPlayingMovie[index].overview,
            release_date: this.state.nowPlayingMovie[index].release_date,
            vote_average: this.state.nowPlayingMovie[index].vote_average,
            vote_count: this.state.nowPlayingMovie[index].vote_count,
            popularity: this.state.nowPlayingMovie[index].popularity,
            showModal: true,
            poster: this.state.nowPlayingMovie[index].poster_path,
            
        })
        console.log(this.state.movieId);
        this.getTrailer()
    }

    getTrailerForUpcomingMovie = async (index) => {
        await this.setState({
            index: index,
            movieId: this.state.upcomingMovie[index].id,
            title: this.state.upcomingMovie[index].title,
            overview: this.state.upcomingMovie[index].overview,
            release_date: this.state.upcomingMovie[index].release_date,
            vote_average: this.state.upcomingMovie[index].vote_average,
            vote_count: this.state.upcomingMovie[index].vote_count,
            popularity: this.state.upcomingMovie[index].popularity,
            showModal: true,
            poster: this.state.upcomingMovie[index].poster_path,
        })
        console.log(this.state.movieId);
        this.getTrailer()
    }

    getTrailerForSearch = async (index) => {
        await this.setState({
            index: index,
            movieId: this.state.movieSearchData[index].id,
            title: this.state.movieSearchData[index].title,
            overview: this.state.movieSearchData[index].overview,
            release_date: this.state.movieSearchData[index].release_date,
            vote_average: this.state.movieSearchData[index].vote_average,
            vote_count: this.state.movieSearchData[index].vote_count,
            popularity: this.state.movieSearchData[index].popularity,
            showModal: true,
            poster: this.state.movieSearchData[index].poster_path,
        })
        console.log(this.state.movieId);
        this.getTrailer()
    }

    getTrailerForTopRatedMovie = async (index) => {
        await this.setState({
            index: index,
            movieId: this.state.topRatedMovie[index].id,
            title: this.state.topRatedMovie[index].title,
            overview: this.state.topRatedMovie[index].overview,
            release_date: this.state.topRatedMovie[index].release_date,
            vote_average: this.state.topRatedMovie[index].vote_average,
            vote_count: this.state.topRatedMovie[index].vote_count,
            popularity: this.state.topRatedMovie[index].popularity,
            showModal: true,
            poster: this.state.topRatedMovie[index].poster_path,
        })
        console.log(this.state.movieId);
        this.getTrailer()
    }


    getTrailer = async () => {

        let url = `${process.env.REACT_APP_HOST}/movieTrailer?movieId=${this.state.movieId}`

        let trailerKey = await axios.get(url)

        this.setState({
            trailerKey: trailerKey.data
        })
        console.log(this.state.trailerKey);
    }


    explore = async (event) => {
        event.preventDefault();
        await this.setState({
            targetSearch: event.target.movie.value,
        })
        let url = `${process.env.REACT_APP_HOST}/searchForMovie?search=${this.state.targetSearch}`
        let movieSearchData = await axios.get(url);

        this.setState({
            movieSearchData: movieSearchData.data,

        })
        console.log(this.state.movieSearchData);
        this.props.handleShowSearch();
    }


    handleClose = () => {
        this.setState({
            showModal: false,
        })
    }


    render() {
  
        return (
            
            <>
                <Search explore={this.explore} />

                <MovieStyle>
                    <PopularMovie popularMovie={this.state.popularMovie} show={this.props.show} getTrailerForPopularMovie={this.getTrailerForPopularMovie} />
                </MovieStyle>

                <MovieStyle>
                    <NowPlayingMovie nowPlayingMovie={this.state.nowPlayingMovie} show={this.props.show} getTrailerForNowPlayingMovie={this.getTrailerForNowPlayingMovie} />
                </MovieStyle>

                <MovieStyle>
                    <TopRatedMovie topRatedMovie={this.state.topRatedMovie} show={this.props.show} getTrailerForTopRatedMovie={this.getTrailerForTopRatedMovie} />
                </MovieStyle>

                <MovieStyle>
                    <UpcomingMovie upcomingMovie={this.state.upcomingMovie} show={this.props.show} getTrailerForUpcomingMovie={this.getTrailerForUpcomingMovie} />
                </MovieStyle>

                <SearchMovie targetSearch={this.state.targetSearch} movieSearchData={this.state.movieSearchData} showSearch={this.props.showSearch} getTrailerForSearch={this.getTrailerForSearch} />

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
            </>
        )
    }
}

export default  withAuth0(HomePage)

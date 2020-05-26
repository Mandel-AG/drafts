import React, {Component} from 'react';
import {Header, MovieDetails, MovieList, Loading, SearchBar } from './components';
// import * as  axios from 'axios'
import apiMovie from './conf/axios.conf'
// import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      movies:null,
      selectedmovie:0,
      loaded:false
    }

  }


  updateSelectedMovie = (index)=> {
    this.setState({
      selectedmovie:index
    })
  }

  
  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then( response => response.data.results)
      .then(movieApi => {
        const movies = movieApi.map(m => ({
        title:m.title,
        description:m.overview,
        details:`${m.release_date} | ${m.vote_average}/10`,
        img:`https://image.tmdb.org/t/p/w500/${m.poster_path}`
      }))
      this.updatedmovie(movies)
    })
      .catch( err => console.log(err));
  }


  updatedmovie = (movies) => {
    this.setState({
      movies,
      loaded:true
    })
  }




  render(){
    return (
      <div className="App d-flex flex-column">
        <Header/>
        <SearchBar updatedmovie={this.updatedmovie}/>
        {this.state.loaded ? (
          <div className='d-flex flex-row flex-fill pt-4 p-2'>
          <MovieList movies={this.state.movies} updateSelectedMovie = {this.updateSelectedMovie}/>
          <MovieDetails movie={this.state.movies[this.state.selectedmovie]}/>
          </div>
        ) :  (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;

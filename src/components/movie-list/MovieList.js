import React from 'react'
import MovieElement from './MovieElement/MovieElement'



export default class MovieList extends React.Component{
    render(){
        return(
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                <div className='w-100'>
                    <h1 className='w-100 text-center border-bottom '>Films List</h1>
                </div>
                {this.props.movies.map((m,index) => (
               <MovieElement key={m.title} movie={m} updateSelectedMovie={() => {this.props.updateSelectedMovie(index)}} />
                ))}
            </div>
            
        )
        
    }
}

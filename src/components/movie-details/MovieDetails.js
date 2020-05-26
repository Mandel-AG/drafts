import React from 'react'



export default class MovieDetails extends React.Component{
    render(){
        return (
            <div className="w-25 border p-4 d-flex flex-column">
                <h5>{this.props.movie.title}</h5>
                <hr className='w-100'/>
                <div>
                    <img alt='film' width='150' height='200' className='d-block mx-auto' src={this.props.movie.img}/>
                </div>
                <hr className='w-100'/>
                <span className='text-secondary'>{this.props.movie.details}</span>
                <hr className='w-100'/>
                <span>{this.props.movie.description}</span>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Formik} from 'formik'
import ApiMovie from '../../conf/axios.conf'

export default class SearchBar extends Component{

    submit = (values, actions) =>{
        // console.log(Object.keys(values))
        const query = '?' + Object.keys(values).map(k => `${k}=${values[k]}&`).join('')
        // console.log(query)
        ApiMovie.get('/search/movie'+ query)
                    .then(res => res.data.results)
                    .then(movieApi => {
                        const movies = movieApi.map(m => ({
                        title:m.title,
                        description:m.overview,
                        details:`${m.release_date} | ${m.vote_average}/10`,
                        img:`https://image.tmdb.org/t/p/w500/${m.poster_path}`
                      }))
                      this.props.updatedmovie(movies)
                      actions.setSubmitting(false)
                    })
                      .catch( err => console.log(err));
    }

    render(){
        return(
            <Formik onSubmit={this.submit}
                    initialValues={{query:'', language:'en-US'}}
            >
                {({handleSubmit, handleChange, handleBlur, isSubmitting})=>(
                    <form className='d-flex p-2 m-2 flex-row' onSubmit={handleSubmit}>
                        <input name='query' className='flex-fill form-control mr-2' placeholder='Search' onChange={handleChange} onBlur={handleBlur}></input>
                        <select className='mr-2 form-control w-25' onChange={handleChange} onBlur={handleBlur}>
                            <option value='en-US'> Anglais</option>
                            <option value='fr-FR'>Francais</option>
                        </select>
                        <button className='btn btn-small btn-success' type='Submit' disabled={isSubmitting}>submit</button>
                    </form>
                )}
            </Formik>
        )
    }

    
}




import React, { Component } from 'react'

class Form extends Component{
    
    render(){
        const {handleChange, addTache, inputText} = this.props

        return(
        <form className="d-flex justify-content-center">
          <input className="input-group-text" type="text" value={inputText} onChange={handleChange}></input>
          <button className="btn btn-outline-primary" onClick={addTache}>
            Ajouter
          </button>

        </form>
        )


    }
}

export default Form
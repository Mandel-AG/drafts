import React, {Component} from 'react'

class Liste extends Component {

  render(){
    const {taches, deletetache, done, listdone } = this.props;

    const listtache = Array.from(listdone).map(list => (
      <div key={list.id} className='border'>
        <li>
        {list.nom}</li>
        <button onClick={()=> done(list, list.nom)} className="btn btn-outline-info">A faire</button>
        </div>
    ))

    const newtache = taches.map(tache => (
      <div key={tache.id} className='border'>
        
        <li>{tache.nom}</li>
        <button onClick={() => deletetache(tache.id)} className="btn btn-outline-danger">Delete</button>{" "}
        <button type='submit' onClick={() => done(tache, tache.nom)}className="btn btn-outline-success">Done</button>

      </div>
    ));
    
    return(
      <div className='d-flex align-items-center flex-column'>

        <div className='card w-50 my-4'>
          <h3>Taches Realisees</h3>
          {listtache}
        </div>

        <div className='card w-50 my-4'>
          <h3>Taches a faire</h3>
          {newtache}
        </div>

      </div>
    )
  }
}

export default Liste
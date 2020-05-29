import React from 'react';
import Liste from './liste';
import Form from './form';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taches: [],
      done:[],
      Inputvalue:'',
      search:'',
      searchResult:[]
    };
  }

  handleChange = e => {
    const Inputvalue = e.currentTarget.value;
    this.setState({
      Inputvalue
    });
  };

  addTache = e => {
    e.preventDefault();
    const nom = this.state.Inputvalue;
    const id = Math.random();
    const condition = true;
    const used =  this.state.taches.find(tache => nom === tache.nom)
    const useddone = this.state.done.find(task => nom === task.nom) 

    if(nom && !used && !useddone){
      this.setState(prevState => {
        return {
          taches: [...prevState.taches, {nom,id,condition, }],
          Inputvalue:'',
        }
      });
    }
    else if(!nom) {
      alert('Veuillez entrer quelque chose!')
    }
    else{
      alert('cette tâche est déjà notée!')
    }
  


  };

  deletetache = id => {
    const filtereded = this.state.taches.filter(tache => tache.id !== id);
    this.setState({
      taches: filtereded
    });
  };


  done = (tache,nom) => {
    
    const used =  this.state.done.find(list => tache.nom === list.nom)
    const tab = [...this.state.done]
    const taches = [...this.state.taches]
    const usede =  this.state.taches.find(list => tache.nom === list.nom)

    
    if(!used){
    const newtab = [...tab, tache]
    const filterededed = taches.filter(tache => tache.nom !== nom);
    this.setState(prevState => {
      return {
        taches: filterededed,
        done: newtab,
      }
    });

  
  }  
    else if (!usede){
      const filtere = tab.filter(tache => tache.nom !== nom);
      const newtabed = [...taches, tache]

      this.setState(prevState => {
        return {
          taches: newtabed,
          done: filtere,
        }
      }); 
    }

    else{return false}
  }

  updated = e => {
    const search = e.currentTarget.value
   

    const searchResult = this.state.taches.filter( task=> {
      return task.nom === search;
      })
      console.log('searchResult',searchResult )

      this.setState({
        search,
        searchResult
      })


  }


  render() {
    const titre = <h1>Todo List</h1>;
    const {search,searchResult} = this.state
    
    

    return (
      <div className='card d-flex justify-content-center'>
        <span className='card-title'>{titre}</span>
        <input className='input-group w-25' type='text' value={search}placeholder='rechercher' onChange={this.updated}></input>
        <ul className='card d-flex justify-content-center w-25 mb-2 '>
        {searchResult.map((element,index) => <li key={element.id}>{element.nom}</li>)}

        </ul>
        <Form handleChange={this.handleChange} addTache={this.addTache} inputText={this.state.Inputvalue}/>

         <ul className='list-group d-flex justify-content-center' >
           <Liste listdone={this.state.done} done={this.done} taches={this.state.taches} deletetache={this.deletetache} />
         </ul> 
        <br/>

        <ul className='list-group'>
        </ul>
      </div>
    );
  }
}

export default Home;

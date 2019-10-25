import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import './App.css';

//Components
import Cards from "./components/Cards"
import Button from "./components/Button"

//Actions
import { catchPokemon } from "./actions/actions"

function App(props) {

  useEffect( ()=>{
    props.catchPokemon()
  }, [])

  console.log(props.pokemon)

  return (
    <div className="App">
      <h1>Gotta Catch 'Em All!</h1>

      <Button/>
      {/* <Cards pokemon={props.pokemon}/> */}
      {props.isLoading ? (
        <p>Is Loading</p>
        ) : (props.pokemon.map(pokemon => (
                
                <h2>{pokemon.name}</h2>
            ))
        )
      }
      {/* {props.isLoading ? (
        <p>Is Loading</p>
        ) : (

          <img src={props.pokemon.sprites.front_default} alt={props.pokemon.species.name}/>
        )
      } */}
      

    </div>
  );
}


function mapStateToProps(state){
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading,
    error: state.error
  }
}

const mapDispatchToProps = {
  catchPokemon
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

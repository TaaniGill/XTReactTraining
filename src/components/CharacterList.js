import React, { Component } from 'react';
import Character from './character';

class CharacterList extends Component{
 
 render() {
  const { characters} = this.props;
  return (
   <div className="hero-wrapper">
   {
     characters.map( (character) => {
       return <Character key={character.id} character={character}/> 
     })
   }    
   </div>
  )
 }
}
export default CharacterList;
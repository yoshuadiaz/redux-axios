import React from 'react'
import CharacterItem from '../components/character/CharacterItem'
import './character.css'
class Character extends React.Component {
  componentDidMount(){
    this.props.loadCharacters()
  }
  render(){
    return <div>
      <h1>Personajes</h1>
      <hr/>
      <div className="characterList">
      {this.props.characters.map(character => <CharacterItem data={character}></CharacterItem>)}
      </div>
    </div>
  }
}

export default Character
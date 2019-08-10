import React from 'react'
import CharacterItem from '../components/character/CharacterItem'
import './character.css'
class Character extends React.Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    if(this.props.characters.length === 0){
      this.props.loadCharacters(2)
    }
  }
  handleClick() {
    this.props.loadCharacters(5)
  }
  render(){
    return <div>
      <h1>Personajes</h1>
      <button onClick={this.handleClick}>Leer página 5</button>
      <hr/>
      {this.props.isLoading && <div>Estoy cargando...</div>}
      <div className="characterList">
      {!this.props.isLoading && this.props.characters.map(character => <CharacterItem data={character}></CharacterItem>)}
      </div>
    </div>
  }
}

export default Character
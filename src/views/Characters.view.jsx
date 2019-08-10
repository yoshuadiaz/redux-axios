import React from 'react'

const CharacterItem = props => <div>
        <h2>{props.data.name}</h2>
        <img src={props.data.image} alt=""/>
      </div>
class Character extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){
    this.props.loadCharacters()
  }
  render(){
    return <div>
      <h1>Personajes</h1>
      <hr/>
      {this.props.characters.map(character => <CharacterItem data={character}></CharacterItem>)}
    </div>
  }
}

export default Character
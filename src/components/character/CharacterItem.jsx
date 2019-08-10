import React from 'react'
import './characterItem.css'
const CharacterItem = props => <div class="characterItem">
        <h2>{props.data.name}</h2>
        <img src={props.data.image} alt=""/>
      </div>

export default CharacterItem
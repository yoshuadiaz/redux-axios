import React from 'react'
import './episodeItem.css'
const Episode = props => <div className="episodeItem">
        <h2>{props.data.episode} | {props.data.name}</h2>
      </div>

export default Episode
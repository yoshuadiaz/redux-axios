import React from 'react'
import Episode from '../components/episodes/EpisodeItem'
class Episodes extends React.Component {
  componentDidMount(){
    if (this.props.episodes.length === 0){
      this.props.loadEpisodes()
    }
  }
  render() {
    return <div>
      {this.props.isLoading && <div>Cargando...</div>}
      {this.props.episodes.map(episode => <Episode data={episode}></Episode>)}
    </div>
  }
}

export default Episodes
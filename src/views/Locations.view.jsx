import React from 'react'

const Location = props => <div>
  <h2>{props.data.name}</h2>
  <p>Tipo: {props.data.type}</p>
  <p>Dimensión: {props.data.dimension}</p>
</div>
class Locations extends React.Component {
  componentDidMount(){
    if (this.props.locations.length === 0){
      this.props.loadLocations()
    }
  }
  render() {
    return <div>
    {this.props.hasError && <div>No se pudo chato</div>}
      {this.props.locations.map(location => <Location data={location}></Location>)}
    </div>
  }
}

export default Locations
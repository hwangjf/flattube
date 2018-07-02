import React, { Component } from 'react';
import Adapter from '../Adapter'

class TVShowList extends Component {

  displayShows = (props) => {
    return this.props.allShows.map( show => {
      return (
        <div key={show.id} id={show.id} onClick={this.props.handleClick} >
          <h5>{show.name}</h5>
          <img src={show.image.medium} />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.displayShows()}
      </div>
    )
  }

}

export default TVShowList;

import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import './App.css';
import Details from './Components/Details';
import Search from './Components/Search';

class App extends Component {
  state = {
    tv_shows: [],
    selected: null,
    term: null
  }

  componentDidMount() {
    Adapter.getShows().then(tvShows =>
      this.setState({
        tv_shows: tvShows
      })
    )
  }

  handleClick = (event) => {
    let show = this.state.tv_shows.find(tv_show => tv_show.id === parseInt(event.currentTarget.id))
    this.setState({selected: show})
  }

  handleChange = (event) => {
    console.log(event.target.value)
    debugger
  }

  render = () => {
    return (
      <div>
        <Search onChange={this.handleChange} />
        <Details search={this.state.selected} />
        <TVShowList allShows={this.state.tv_shows} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default App;

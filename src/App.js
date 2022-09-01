import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./containers/App.css";

class App extends Component {
    constructor() {
      super()
      this.state = {
        robots: [],
        searchfield: ''
      }
    }
    
    //react method (no need arrow syntax)
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
      // .then(users => {});
    }
    
    //custom method
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? 
           <h1 className="loading">Loading...</h1> :
           (
            <div className='tc'>
                <h1 className="f1">{searchfield === '' ? 'Robofriends' : searchfield}</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
           );
    };
    
}

export default App;

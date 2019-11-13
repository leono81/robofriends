import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots';
import "./App.css"


class App extends Component {
        constructor(){
                super();
                this.state = {
                        robots: robots,
                        searchField: "",
                };
        }

        OnSearchChange = (event) => {
                this.setState({searchField: event.target.value});
        }

        render(){
                const filteredRobots = this.state.robots.filter(robot =>{
                        return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
                })
                return(
                        <div className="tc">
                                <h1 className = "f1"> robofriends </h1>
                                <SearchBox searchChange={this.OnSearchChange} />
                                <CardList robots={filteredRobots} />
                        </div>
                );
        }
}



export default App;
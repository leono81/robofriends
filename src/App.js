import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots';
import "./App.css"


class App extends Component {
        constructor(){
                super();
                this.state = {
                        robots: [],
                        searchField: "",
                };
         }

        componentDidMount(){
                this.setState({robots:robots});

        }

        OnSearchChange = (event) => {
                fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(users => this.setState({robots: users}));
                
                this.setState({searchField: event.target.value});
        }

        render(){
                const filteredRobots = this.state.robots.filter(robot =>{
                        return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase());
                })
                if (this.state.robots.length === 0){
                        return <h1>Loading</h1>;
                }
                else{
                        return(
                                <div className="tc">
                                        <h1 className = "f1"> robofriends </h1>
                                        <SearchBox searchChange={this.OnSearchChange} />
                                        <CardList robots={filteredRobots} />
                                </div>
                        );
                }
                

        }
}



export default App;
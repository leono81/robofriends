import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';
import Scroll from '../components/Scroll';
import "./App.css";


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
                const {robots,searchField} = this.state;
                const filteredRobots = robots.filter(robot =>{
                        return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
                })
                if (!robots.length){
                        return <h1>loading</h1>;
                }
                else{
                        return(
                                <div className="tc">
                                        <h1 className = "f1"> robofriends </h1>
                                        <SearchBox searchChange={this.OnSearchChange} />
                                        <Scroll>
                                                <CardList robots={filteredRobots} />
                                        </Scroll>
                                </div>
                        );
                }
                

        }
}



export default App;
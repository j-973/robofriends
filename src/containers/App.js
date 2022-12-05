import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
 
class App extends Component {
	constructor() {
	super()
	this.state = {
	robots: [],
	searchfield: ''
	}
}

componentDidMount() { 					/* runs when the App.js has finished mounting/loading on the page
										fetching robot list from placeholder API
										updating the users/robots using setState*/
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {this.setState({ robots: users})});
}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	return (!robots.length) ? <h1>-- Loading...please wait! --</h1> :
		(
	<div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange} />
		<Scroll>
		 <ErrorBoundary>
		 	<CardList robots={filteredRobots}/>
		 </ErrorBoundary>
		 </Scroll>
	</div>
		);
	}
}


export default App;
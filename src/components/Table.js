import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.sortBy);
		switch(nextProps.sortBy){
			case 'name' : this.compareByName();
					break;
			case 'age' : this.compareByAge();
					break;
			case 'points' : this.compareByPoints();
					break;
			case 'rank' : this.compareByRank();
					break;
		}
	}

	compareByAge() {
		this.setState((prevState) => { 
			users : prevState.users.sort((a,b) => {
				return a.age - b.age
			});
		})
	}

	compareByName() {
		this.setState((prevState) => { 
			users : prevState.users.sort((a,b) => {
				return a.name.localeCompare(b.name);
			});
		})
	}

	compareByPoints() {
		this.setState((prevState) => { 
			users : prevState.users.sort((a,b) => {
				return a.points - b.points
			});
		})
	}

	compareByRank(a, b) {
		this.setState((prevState) => { 
			users : prevState.users.sort((a,b) => {
				return a.rank - b.rank
			});
		})
	}



	render() {
 
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{this.state.users.map(({age,name,points,rank}) => (
						<tr key={rank}>
							<td>{age}</td>
							<td>{name}</td>
							<td>{points}</td>
							<td>{rank}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>)
	}
}

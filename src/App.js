import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sortBy: ""
    }

  }

  handleClickAge = () =>  {
    this.setState({
      sortBy: "age"
    })
  }

  handleClickName = () => {
    this.setState({
      sortBy: "name"
    })
  }

  handleClickPoints= () =>  {
    this.setState({
      sortBy: "points"
    })
  }

  handleClickRank= () =>  {
    this.setState({
      sortBy: "rank"
    })
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age  handleClick={this.handleClickAge}></Age>
          <Name handleClick={this.handleClickName}></Name>
          <Points handleClick={this.handleClickPoints}></Points>
          <Rank handleClick={this.handleClickRank}></Rank>
          <Table sortBy={this.state.sortBy}></Table>
        </div>
      </div>
    );
  }
}


import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search/search.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchTerm: '',
      appName: 'Monsters Rolodex'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => {
        this.setState({
          monsters: users
        });
      });
  }

  handleChange(e) {
    this.setState({ searchTerm: e?.target?.value });
  }

  render() {
    const { monsters, searchTerm, appName } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="app-name">{appName}</h1>
        <Search placeholder="Search monsters..." onSearch={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;

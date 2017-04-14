import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './GitHubCards/CardList';
import CardForm from './GitHubCards/CardForm';
import './App.css';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="form-group">
          <CardForm onSubmit={this.addNewCard} />
          <CardList cards={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;

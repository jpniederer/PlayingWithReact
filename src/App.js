import React, { Component } from 'react';
import logo from './logo.svg';
import CardList from './GitHubCards/CardList';
import CardForm from './GitHubCards/CardForm';
import Game from './TicTacToe/Game';
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
        <div>
          <Game />
          <div id="errors" className="game-errors"></div>
        </div>
      </div>
    );
  }
}

export default App;

window.addEventListener('mousedown', function(e) {
  document.body.classList.add('mouse-navigation');
  document.body.classList.remove('kbd-navigation');
});
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 9) {
    document.body.classList.add('kbd-navigation');
    document.body.classList.remove('mouse-navigation');
  }
});
window.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
    e.preventDefault();
  }
});
window.onerror = function(message, source, line, col, error) {
  var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
  //errors.textContent += text + '\n';
  //errors.style.display = '';
};
console.error = (function(old) {
  return function error() {
    //errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
    //errors.style.display = '';
    old.apply(this, arguments);
  }
})(console.error);
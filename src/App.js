import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const CHOICES = ["Human", "Bear", "Gun"];

class App extends React.Component {
  // You don't need a constructor and you don't need to bind this
  // if you use arrow functions

  // You can also define state like this:
  state = {
    // I renamed these, oops :)
    computerChoice: null,
    userChoice: null,
    // ... and added a result state, too
    result: null
  };

  // Renamed determineWinner, as it's more like getting the result
  // We don't update the state here this time
  getResult = (userChoice, computerChoice) => {
    // If we return early, the rest of the functions is not executed,
    // so we don't need to use else ifs
    if (userChoice === computerChoice) {
      return "It's a tie";
    }

    switch (userChoice) {
      case "Human":
        // I'm pretty sure you've heard of ternary operators
        // They are easier to read
        return computerChoice === "Bear"
          ? "The bear has torn you apart"
          : "You have disarmed the gun";

      case "Bear":
        return computerChoice === "Human"
          ? "You tore him apart like a paper"
          : "You have been shot by a gun";

      case "Gun":
        return computerChoice === "Human"
          ? "Your gun has been disarmed"
          : "You shot the bear down";

      default:
        return null;
    }
  };

  // We only need a single handleClick
  // if we pass the button's index as an argument
  markUserChoice = index => {
    this.setState({
      // Let's reset the computer's choice every time we choose one
      computerChoice: null,
      userChoice: CHOICES[index]
    });
  };

  // Generate and return a random choice
  // We don't update the state here this time
  getRandomChoice = () => {
    const randomNumber = Math.floor(Math.random() * CHOICES.length);

    return CHOICES[randomNumber];
  };

  // Instead of updating the states in getComputerChoice and determineWinner,
  // we're only returning values from those functions and update the state here,
  // so React can render them
  playGame = () => {
    const { userChoice } = this.state;
    const computerChoice = this.getRandomChoice();
    const result = this.getResult(userChoice, computerChoice);

    this.setState({
      computerChoice,
      result
    });
  };

  render() {
    // Don't you just love destructuring? :)
    const { computerChoice, userChoice, result } = this.state;

    // I've added some classnames and styled them a bit in styles.css
    return (
      <div className="wrapper">
        <h1 className="title">
          Human-Bear-Gun <strong>Mini Game</strong>
        </h1>
        <div className="instructions">
          <p>Click on one of the {CHOICES.length} choices, then hit Play</p>
        </div>
        <div className="btn-group">
          {/* We can iterate over our choices constant, so we don't have to copy paste the butttons */}
          {CHOICES.map((choice, i) => (
            <button
              key={choice}
              className="btn"
              // We can pass the index "i" as the first argument so we know what we clicked on
              onClick={() => this.markUserChoice(i)}
            >
              {choice}
            </button>
          ))}
          <button
            className="btn btn--play"
            // Let's just disable the play button if user hasn't chose anything
            disabled={!userChoice}
            onClick={this.playGame}
          >
            Play
          </button>
        </div>
        <div className="results">
          <p className="result">{userChoice || "???"}</p>
          <p className="result">{computerChoice || "???"}</p>
          <p className="result result--small">(You)</p>
          <p className="result">vs</p>
          <p className="result result--small">(Computer)</p>
          {result && <p className="result">{result}</p>}
        </div>
      </div>
    );
  }
}
export default App;
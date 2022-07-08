import React from "react";
import "./App.css";

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("render called...");

    return this.state.counter <= 5 ? (
      <div>
        {this.state.counter}
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Increase
        </button>
      </div>
    ) : (
      <div>Done</div>
    );
  }
}

export default App;

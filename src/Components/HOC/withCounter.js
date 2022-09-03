import React, { Component } from "react";

const withCounter = (CoreComponent) => {
  class NewComponent extends Component {
    state = {
      count: 0,
    };
    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
      const { count } = this.state;

      return (
        <CoreComponent count={count} incrementCount={this.incrementCount} />
      );
    }
  }
  return NewComponent;
};

export default withCounter;

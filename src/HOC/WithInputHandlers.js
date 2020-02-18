import React, { Component } from "react";
export const WithInputHandlers = WrappedComponent => {
  class NewComponent extends Component {
    state = [];

    render() {
      return <WrappedComponent></WrappedComponent>;
    }
  }

  return NewComponent;
};

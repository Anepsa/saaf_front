import React, { Component } from "react";
export const WithViewPanelContainer = WrappedComponent => {
  class NewComponent extends Component {
    state = [];

    render() {
      return <WrappedComponent></WrappedComponent>;
    }
  }

  return NewComponent;
};

import React, { Component } from "react";
import axios from "axios";

export const WithApiCall = WrappedComponent => {
  class NewComponent extends Component {
    state = [];
    apiCall = (url) => {
      axios({
        method: "get",
        url: url,
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          console.log(res.data);
          this.setState({ data: res.data.usuarios });
        })
        .catch(error => {
          console.log(error);
        });
    };
    render() {
      return <WrappedComponent apiCall= {this.apiCall}/>
    }
  }

  return NewComponent;
};

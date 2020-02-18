import React, { Component } from "react";
import axios from "axios";

export const WithSearch = WrappedComponent => {
  class NewComponent extends Component {
    state = {
      searchParam: "",
      data: []
    };

    apiPut = (url, itemData) => {
      axios
        .put(url, itemData, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    // apiPut = async (url, itemData) => {
    //   const res = await axios.put(url, itemData, {
    //     headers: { "Content-Type": "application/json" }
    //   });
    // };

    apiGet = async (url, resFieldName, apiMethod, data) => {
      console.log(data)
      JSON.stringify(data);
      const res = await axios.get(url);
      const responseData = res.data;
      this.setState({ data: responseData[resFieldName] });
      console.log(responseData);
    
    };

    search = param => {
      this.setState({ searchParam: param });
    };

    deactFunc = (url, data) => {
      console.log("deactivating");
      
      let itemData = { ...data };
      itemData.datos.estado = !itemData.datos.estado;
      const newData = { datos: itemData.datos };
      this.apiPut(url, newData);
    };

    render() {
      return (
        <WrappedComponent
          match={this.props.match}
          params={this.props.match.params}
          searchFunc={this.search}
          deactFunc={this.deactFunc}
          searchParam={this.state.searchParam}
          apiGet={this.apiGet}
          data={this.state.data}
        ></WrappedComponent>
      );
    }
  }

  return NewComponent;
};

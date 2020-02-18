import React, { Component } from "react";
import axios from "axios";
import { NewTable } from "./NewTable";

export default class NewTableContainer extends Component {
  state = {
    data: []
  };
  fetchApiData = () => {
    // const companyId = this.props.match.params.idCompany;
    // console.log(this.props.match.params.idCompany);
    const method = "get";
    const url = `https://murmuring-journey-73788.herokuapp.com/inpc/get/${"5e0e43d932be71118c080ec9"}?desde=0&limite=10&filtro_year=-1`;
    const headers = {
      "Content-Type": "application/json"
    };
    axios({
      method: method,
      url: url,
      headers: headers
    })
      .then(res => {
        console.log(res.data.Inpc);
        const data = res.data.Inpc;
        this.setState({ data: data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchApiData();
  }

  render() {
    return (
      <div>
        <NewTable data={this.state.data} />;
      </div>
    );
  }
}

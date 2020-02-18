import React from "react";

export const WithTableHeadersFormat = WrappedComponent => {
  class WithTableHeadersFormat extends React.Component {
    state = {};

    mapTableHeaders = tableHeadersList => {
      const mappedTableHeaders = tableHeadersList.map(tHead => {
        return (
          <th>
            <span>{tHead}</span>
          </th>
        );
      });

      return mappedTableHeaders;
    };
    render() {
      return (
        <WrappedComponent mapTableHeaders={this.mapTableHeaders}>
          <h1>Hola pessrros </h1>
        </WrappedComponent>
      );
    }
  }
  return WithTableHeadersFormat;
};

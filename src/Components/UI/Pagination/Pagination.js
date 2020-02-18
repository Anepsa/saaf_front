import React from "react";
import Pagination from "react-bootstrap/Pagination";

export const Paginacion = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return <div style= {{display: "inline-flex"}}>
     
     <Pagination.Prev /> {items}  <Pagination.Next />

      {/* <Pagination.Item key={1} active={1 === active}>
        {1}
      </Pagination.Item>
      <Pagination.Item key={1} active={1 === active}>
        {2}
      </Pagination.Item>
      <Pagination.Item key={1} active={1 === active}>
        {3}
      </Pagination.Item> */}
  </div>;
};

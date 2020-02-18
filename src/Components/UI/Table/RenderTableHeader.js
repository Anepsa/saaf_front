import React from "react";

export const RenderTableHeader = props => {
  return props.keys.map((key, index) => {
    return <th key={props.data[key]}>{props.data[key]}</th>;
  });
};

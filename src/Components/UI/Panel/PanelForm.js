import React from "react";
import { Form , Button} from "react-bootstrap";

const SearchBar = props => {
  return (
<Form>
    {props.children}
</Form>
  );
};

export default SearchBar;




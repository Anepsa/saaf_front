import React , {useState} from "react"
import { Row, Col, Toast, Button } from "react-bootstrap";
// import { Button } from "react-bootstrap/lib/InputGroup";


function Notification(props) {
    const [show, setShow] = useState(false);
  
    return (
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={props.show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
      
      </Row>
    );
  }
  
export default Notification
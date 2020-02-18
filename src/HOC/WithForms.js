import React, { Component } from 'react'

export default class WithForms extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


// import React, { Component } from "react";
// import axios from "axios";
// import { Col, Row } from "react-bootstrap";
// import { TextForm } from "../UI/Panel/TextForm";
// import CancelButton from "../UI/Buttons/CancelButton";
// import SubmitButton from "../UI/Buttons/SubmitButton";
// import { DropdownForm } from "../UI/Forms/DropdownForm";
// import { withRouter } from "react-router";
// // import OldSubmit from "../UI/Buttons/OldSubmit";
// export const WithForms = WrappedComponent => {
//   class NewComponent extends Component {
//     state = {
//       datos: []
//     };

//     setRedirect = () => {
//       this.setState({
//         redirect: false
//       });
//     };

//     handleNestedInputChange = (e, stateKey) => {
//       const data = { ...this.state[stateKey] };
//       const stateTarget = [e.target.name];
//       data[stateTarget] = e.target.value;
//       this.setState({ [stateKey]: data });
//       console.log(this.state);
//     };

    
//     postData = async url => {
//       const data = { ...this.state.data };
//       JSON.stringify(data);
//       const res = await axios.post((url, { data }));
//       const responseData = res.data;
//       this.setState({ data: responseData });
//     };

//     fetchData = async url => {
//       // JSON.stringify(data);
//       const res = await axios.get(url);
//       const responseData = res.data;
//       console.log(responseData);
//       this.setState({ data: responseData });
//     };

//     mapForms = forms => {
//       const mappedForms = forms.map(form => {
//         const { name, type, longName } = form;
//         const data = { ...this.state.datos };
//         const dataName = data[name];
//         return (
//           <Col>
//             <TextForm
//               onChange={this.handleInputChange}
//               // onChange={e => this.handleNestedInputChange(e, stateKey)}
//               value={dataName}
//               name={name}
//               placeholder={name}
//               type={type}
//               label={longName}
//             />
//           </Col>
//         );
//       });
//       return mappedForms;
//     };

//     // ====================================Nested Forms (Anidados) ===================================
//     mapNestedForms = forms => {
//       const mappedForms = forms.map(form => {
//         const { name, type, stateKey, isDropdown } = form;
//         const data = { ...this.state.data };
//         const dataName = data[name];

//         return (
//           <Col>
//             <TextForm
//               // onChange={this.handleInputChange}
//               onChange={e => this.handleNestedInputChange(e, stateKey)}
//               value={dataName}
//               name={name}
//               placeholder={name}
//               type={type}
//               label={form.name}
//             />
//           </Col>
//         );
//       });
//       return mappedForms;
//     };

//     render() {
//       // Verifies Nested Forms Existance
//       const { forms, nestedForms, depreciationForms } = this.props;
//       const hasForms = forms ? this.mapForms(forms) : null;
//       const hasNestedForms = nestedForms
//         ? this.mapNestedForms(nestedForms)
//         : null;
//       const hasDepreciationForms = depreciationForms
//         ? this.mapDepreciationForms(depreciationForms)
//         : null;

//       return (
//         <WrappedComponent
//           mappedForms={forms}
//           hocProps={this.props}
//           hocData={this.state.datos}
//           fetchData={this.fetchData}
//           match={this.props.match}
//         >
//           <Row>{hasForms}</Row>
//           <Row>{hasDepreciationForms} </Row>
//           <Row>{hasNestedForms} </Row>
//           {/* {this.props.children} */}

//           <Row className="float-right">
//             <Col>
//               <CancelButton {...this.props} clicked={this.goBack} />
//               {/* <OldSubmit
//                 // {...this.props}
//                 fetchData={this.fetchData}
//                 clicked={this.postData(this.props.url)}
//               /> */}
//             </Col>
//           </Row>
//         </WrappedComponent>
//       );
//     }
//   }
//   return NewComponent;
// };

// export default withRouter(WithForms);

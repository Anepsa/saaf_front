

// =====Configuración 
Depreciaciones  = null 
Centro de Costos = Done 
Cuentas contables = almost
Tipos de Activo = null 
Empleados = done 
Catálogos = null 
Ubicaciones = almost 
Proyectos = done 
Proveedores = done 


// =======Panel de Control
INPC = almost 
Tipo de cambio = done 
Roles = almost 
Usuarios = done 


// ======== General 

Companies = done 
SubCompanies = done 



==========



import SubmitButton from "../UI/Buttons/SubmitButton";
import { DropdownForm } from "../UI/Forms/DropdownForm";
import { Redirect, withRouter } from "react-router";

import { NotificationManager } from "react-notifications";

export const WithInputHandlers = WrappedComponent => {
  class NewComponent extends Component {
    state = { redirect: false };

    setRedirect = () => {
      this.setState({
        redirect: false
      });
    };
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to="" />;
      }
    };
    // external function that returns  mapped Forms will not be in HOC
    handleInputChange = e => {
      // Updates Nested State (Inmutably) using input's Name and Value
      const data = { ...this.state.data };
      const stateTarget = [e.target.name]; //Input's Name Identifier
      data[stateTarget] = e.target.value; //Assigns the Specific Key's value = to the input's value
      this.setState({ data: data }); //Sets State to New User Data

      console.log(this.state.data)
    };

    handleNestedInputChange = (e, stateKey) => {
      const data = { ...this.state[stateKey] };
      const stateTarget = [e.target.name];
      data[stateTarget] = e.target.value;
      this.setState({ [stateKey]: data });
    };

    postData = async () => {
      const { url, method } = this.props.postReqs;
      const headers = { "Content-Type": "application/json" };
      const data = { ...this.state.data };
      let respuesta = await axios({
        method: method,
        url: url,
        headers: headers,
        data: data
      });
      const responseData = respuesta.data.proyecto;
      this.setState({ data: responseData });
      // .then(res => {
      //   console.log(res.data);
      //   const responseData = res.data.proyecto;
      //   // const notificationMsg = res.data.mensaje
      //   this.setState({ data: responseData });
      //   NotificationManager.success("Éxito");

      // })

      // .catch(error => {
      //   console.log(error);
      //   NotificationManager.error("Error");
      // });
    };

    fetchData = () => {
      //
      // can be abstracted

      const { url, method, resFieldName } = this.props.fetchReqs;
      const headers = { "Content-Type": "application/json" };
      // const data = { ...this.state.data };
      axios({
        method: method,
        url: url,
        headers: headers
      })
        .then(res => {
          console.log(res.data);
          const responseData = res.data[resFieldName][0].datos; // For new API changes
          console.log(responseData)
          // const responseData = res.data[resFieldName];
          this.setState({ data: responseData });
        })
        .catch(error => {
          console.log(error);
        });
    };

    mapForms = forms => {
      const mappedForms = forms.map(form => {
        const { name, type, longName } = form;
        const data = { ...this.state.data };
        const dataName = data[name];

        return (
          <Col>
            <TextForm
              onChange={this.handleInputChange}
              // onChange={e => this.handleNestedInputChange(e, stateKey)}
              value={dataName}
              name={name}
              placeholder={name}
              type={type}
              label={longName}
            />
          </Col>
        );
      });
      return mappedForms;
    };

    mapNestedForms = forms => {
      const mappedForms = forms.map(form => {
        const { name, type, stateKey, isDropdown } = form;
        if (isDropdown) {
          console.log("is Dropdown");
          return (
            <Col>
              <DropdownForm
                onChange={this.handleInputChange}
                value={this.state.data}
                name={name}
                placeholder={name}
                type={type}
                label={form.name}
              />
            </Col>
          );
        } else {
          return (
            <Col>
              <TextForm
                // onChange={this.handleInputChange}
                onChange={e => this.handleNestedInputChange(e, stateKey)}
                value={this.state.data}
                name={name}
                placeholder={name}
                type={type}
                label={form.name}
              />
            </Col>
          );
        }
      });
      return mappedForms;
    };

    mapDepreciationForms = forms => {
      const mappedForms = forms.map(form => {
        const { name, type, stateKey, isDropdown } = form;
        if (isDropdown) {
          return (
            <Col>
              <DropdownForm
                onChange={this.handleInputChange}
                // onChange={e => this.handleNestedInputChange(e, stateKey)}
                value={this.state.data}
                name={name}
                placeholder={name}
                type={type}
                label={form.name}
              />
            </Col>
          );
        } else {
          return (
            <Col>
              <TextForm
                onChange={this.handleInputChange}
                // onChange={e => this.handleNestedInputChange(e, stateKey)}
                value={this.state.data}
                name={name}
                placeholder={name}
                type={type}
                label={form.name}
              />
            </Col>
          );
        }
      });
      return mappedForms;
    };

    componentDidMount() {
      if (this.props.isEdit) {
        this.fetchData();
      }
    }
    render() {
      // Verifies Nested Forms Existance
      const { forms, nestedForms, depreciationForms } = this.props;
      const hasForms = forms ? this.mapForms(forms) : null;
      const hasNestedForms = nestedForms
        ? this.mapNestedForms(nestedForms)
        : null;
      const hasDepreciationForms = depreciationForms
        ? this.mapDepreciationForms(depreciationForms)
        : null;
      return (
        <WrappedComponent
          mappedForms={forms}
          hocProps={this.props}
          hocData={this.state.data}
          onApiCall={this.fetchApiData}
        >
          {this.renderRedirect()}
          <Row>{hasForms}</Row>
          <Row>{hasDepreciationForms} </Row>
          <Row>{hasNestedForms} </Row>
          {this.props.children}
          <Row className="float-right">
            <Col>
              <CancelButton {...this.props} clicked={this.goBack} />
              <SubmitButton
                fetchData={this.fetchData}
                clicked={this.postData}
              />
            </Col>
          </Row>
        </WrappedComponent>
      );
    }
  }
  return NewComponent;
};

export default withRouter(WithInputHandlers);


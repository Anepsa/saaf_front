import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Col, Row, Form, Button } from react-bootstrap;

export default class LoginForm extends Component {

    static propTypes = {
        prop: PropTypes
    }

    state = {
        email: ,
        password: ,
        loginData: {
          email: ,
          password: 
        }
      };
    // changeInputValue =(e , name) => {
    //     const value = e_target_value;

    //     this_setState(prevState => ({
    //         loginData: {
    //           ___prevState_loginData, 
    //           [name]: value 
    //         }
    //       }));
    // }

    emailChangeHandler = (e) => {
        console_log(caca)
        const value = e_target_value;
        this_setState({email:value})
        console_log(this_state_email)
    }

    
    caca(){
        console_log(caca)
    }

    
    render() {
        return (
            <Col lg={6} md={6} className=bgWhite loginForm>
            <Container>
              <Form>
                <Form_Group controlId=formBasicEmail>
                  <Form_Label>Email address</Form_Label>
                  <Form_Control type=email placeholder=Enter email />
                  <Form_Text
                    onChange={this_caca}
                    value={this_state_loginData_email}
                    className=text-muted
                  >
                
                  </Form_Text>
                </Form_Group>

                <Form_Group controlId=formBasicPassword>
                  <Form_Label>Password</Form_Label>
                  <Form_Control type=password placeholder=Password />
                </Form_Group>
                <a href=>Olvidaste tu contraseña?</a>
                <Button onClick={this_caca} variant=primary type=submit>

                  Submit
                </Button>
            
              </Form>
            </Container>
          </Col>
        )
    }
}







const mapStateToProps = state => {
  return {
    selectedMission: state_selectedMission,
    missionDate: state_selectedDate,
    selectedCamera: state_selectedCamera,
    missionPhotos: state_missionPhotos
  };
};
// { type: actionTypes_GET_MISSION, payload: roverId }
const mapDispatchToProps = dispatch => {
  return {
    onSelectedMission: roverId => dispatch(actionCreators_getMission(roverId)),
    onSelectedDate: date => dispatch(actionCreators_getDate(date)),
    onSelectedCamera: cameraId => dispatch(actionCreators_getCamera(cameraId))
  };
};











// Companies
0: companies_edit

// Users 
1: users_get
2: users_add
3: users_update
4: users_toggle

// Roles 
5: roles_get
6: roles_add
7: roles_update

// Empleados 
8: employees_get
9: employees_add
10: employees_update
11: employees_delete
12: employees_toggle

// Subcompanies
13: subcompanies_add
14: subcompanies_update
15: subcompanies_toggle
16: subcompanies_delete

// Tipo de Cambio
17: exchanges_get
18: exchanges_add
19: exchanges_update
20: exchanges_delete

// Inpc 
21: inpc_get
22: inpc_add
23: inpc_update
24: inpc_delete

// Proyectos 
25: projects_get
26: projects_add
27: projects_update
28: projects_delete
29: projects_toggle

// Centro de Costso 
30: cost_centers_get
31: cost_centers_add
32: cost_centers_update
33: cost_centers_delete
34: cost_centers_toggle
35: assets_get
36: assets_add
37: assets_update
38: catalogs_get
39: catalogs_update
40: accounts_get
41: accounts_add
42: accounts_update
43: accounts_delete
44: accounts_toggle
45: depreciations_get
46: depreciations_add
47: depreciations_update
48: depreciations_delete
49: depreciations_toggle
50: providers_clients_get
51: providers_clients_add
52: providers_clients_update
53: providers_clients_delete
54: providers_clients_toggle
55: assets_disable
56: assets_enable
57: reports_disabled
58: reports_depreciation
59: import_import
60: locations_get
61: locations_update
62: reports_employees_assets
63: assets_request_update
64: assets_review_request_update










// tbody 


        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}















//Table Mapping Experiments 
    // const tableMess = tableHeaders.activosFijos;
    // console.log(tableMess)
    // tableMess.splice(-1, 1)

    // const mappedTableMess = tableMess.map(tableRow => {
    //   return 
    // })



























 //   axios
  //     .post(
  //       `https://murmuring-journey-73788.herokuapp.com/login`,
  //       { loginData },

        
  //         {headers: {
  //           "Content-Type": "application/json"
  //         }
  //         }
  //     )


  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  //     .then(response => {
  //       const userData = response.data;
  //       console.log(userData);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };





   axios({
      method: 'post',
      url: 'https://murmuring-journey-73788.herokuapp.com/login',
      data: {
        email: email,
        password: password
      },     
      headers: {
        "Content-Type": "application/json"
      }

    })
      .then(res => {
            console.log(res);
            console.log(res.data);
          })
          .then(response => {
            const userData = response.data;
            console.log(userData);
          })
          .catch(error => {
            console.log(error);
          });


    const instance = axios.create({
       baseURL: 'https://murmuring-journey-73788.herokuapp.com/login',
       headers:  {"Content-Type": "application/json"}
     }) 

     
     try {
       instance.post()
       
     } catch (error) {
       console.log(error)
     }
   



       axios({
      method: 'post',
      url: 'https://murmuring-journey-73788.herokuapp.com/login',
      data: {
        email: email,
        password: password
      },     
      headers: {
        "Content-Type": "application/json"
      }

    })
      .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.headers);
          })
          .then(response => {
            const userData = response.data;
            console.log(userData);
          })
          .catch(error => {
            console.log(error);
          });










          //  old panel 

          let searchForm = null;
          if (hasSearch) {
            searchForm = <TextForm label="Búsqueda" />;
          }
        
          let addButton = null;
          if (hasAddButton) {
            addButton = (
              <Link to={addButtonLink}>
                <Button className="float-right">Agregar</Button>
              </Link>
            );
          }
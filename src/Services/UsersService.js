import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
class UsersService extends Component {
    state = {
        loading: false,
        payload: [],
        searchParam: '',
        nestedData: {},
        nombre: "error",
        permisos: [],
        companies_edit: true,
        forms: [],
        company_permisos: []
    };

    componentDidMount() {
        //this.apiGetCompany(); // Cambiar por get Roles.
    }

    apiPut = () => { // Editar
        console.log('apiPut - Update - Roles');
        const data = { ...this.state.data, [this.props.stateField]: this.state[this.props.stateField] };
        data.permisos = this.state.permisos;
        axios({
            method: 'put',
            url: this.props.editPath,
            data: data,
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => {
                const history = this.props.history;
                console.log(res.data);
                history.goBack();
            })
            .catch((err) => {
                console.log(err);
            });

    };

    apiDelete = () => { // Eliminar
        console.log("Eliminar - En construccion.");
    }

    apiGet = () => { // Lo manda a llamar el constructor
        axios
            .get(this.props.path)
            .then((res) => {
                console.log("Get en Roles Service")
                //console.log(res)
                this.setState({ data: res.data });
                this.iniciarValores(res.data);
                //this.setState({ payload: res.data[this.props.field] });
                this.setState({ loading: false });
                //console.log(this.state.payload[this.props.field])
            })
            .catch((err) => {
                console.log(err);
            });
    };

    apiGetCompany = () => { // Para obtener los roles a usar.
        console.log(this.props.getCompanyPath)
        axios
            .get(this.props.getCompanyPath, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: sessionStorage.sessionToken
                }})
            .then((res) => {
                console.log("Get Company en Roles Service")
                this.setState({ company_permisos: res.data.company.role_list });
                this.setState({ loading: false });
                this.getForms();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    apiPost = () => { // Nuevo
        console.log("Nuevo en User Services")
        axios({
            method: 'post',
            url: this.props.postPath,
            data: { ...this.state.data, [this.props.stateField]: this.state[this.props.stateField] },
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => {
                console.log(res.data);
                const history = this.props.history;
                history.goBack();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    getForms() { // Obtiene los Permisos a mostrar Por company
        const forms = [];
        const company_permisos = this.state.company_permisos;

        this.props.forms.forEach(form => { forms.push(form) }); // Agrega los forms por defecto.

        company_permisos.forEach(permiso => {
            const form = {};
            form.name = permiso;
            form.type = 'checkbox';
            form.longName = 'Nombre';
            form.stateKey = 'permisos';
            form.isNested = true // Need to optimize in WithForms;
            forms.push(form);
        });
        this.setState({ forms: forms });

        if (this.props.esEdit) {
            this.setState({ loading: true });
            this.apiGet();
        } else {
            console.log("No es Edit, por lo tanto no se le inicializan los campos");
        }
    }

    iniciarValores(data) {
        const dataInicial = data[this.props.field];
        dataInicial.permisos.forEach(permiso => {
            dataInicial[permiso] = true;
        });
        this.setState({ payload: dataInicial }); // Para el modulo de mostrar checkbox
        this.setState({ permisos: data.permisos.permisos }); // Para iniciar los valores a la hora de usar apiPut
    }

    analizarPermisos(e) {//Agrega o retira un permiso.
        const { name, checked } = e.target;
        let newData = this.state.permisos;
        if (checked) {
            newData.push(name);
        } else {
            newData = this.removerDelArreglo(name, newData);
        }
        console.log(newData);
        this.setState({ permisos: newData });
    }

    removerDelArreglo(name, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === name) {
                arr.splice(i, 1);
            }
        }
        return arr;
    }

    handleNested = (e, stateKey) => {
        console.log('Handling NESTED Input');
        const newPayload = this.state[stateKey];
        const { name, value } = e.target;
        const newData = { ...newPayload };
        newData[name] = value;
        this.setState({ [stateKey]: newData });
        console.log(this.state);
    };

    handleInputChange = (e) => { // En agregar funciona
        const data = { ...this.state.data };
        const newData = data;
        const { name, value } = e.target;
        newData[name] = value;
        // this.setState({ data:{data: newData} });
        this.setState({data:
            {
                "nombre": "Prueba",
                "apellido": "Prueba",
                "email": "prueba_roberto1@hotmail.com",
                "password": "1234",
                //"passwordDate": "2019-12-23T18:22:52.955+00:00",
                "companies": {
                    "permisos": "5e4f2d3b1f5b41001794e875"
                }
            }}
        );
        console.log(value);
    };

    handleCheckboxChange = (e, stateKey) => {
        if (stateKey == "permisos") {
            this.analizarPermisos(e);
        } else {
            console.log("No hace nada")
            console.log(e)
        }
    }

    render() {
        return this.props.render({
            data: this.state,
            handleNestedInputChange: this.handleNested,
            handleInputChange: this.handleInputChange, // handleNestedInputChange
            handleCheckboxChange: this.handleCheckboxChange,
            apiSubmit: this.apiPost,
            apiEdit: this.apiPut,
            apiPut: this.apiPut,
            apiDelete: this.apiDelete,
            forms: this.state.forms,
        });
    }
}

export default withRouter(UsersService);

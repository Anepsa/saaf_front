import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { WithInputHandlers } from '../../HOC/WithInputHandlers';
class PutFormBuilder extends Component {
	state = {
		loading: false,
		payload: [],
		searchParam: '',
		formattedPayload: { datos: [ { popo: 'mierda' } ] },
		nestedData: {},
		meses: {
			enero: 2,
			febrero: 2,
			marzo: 2,
			abril: 2,
			mayo: 2,
			junio: 2,
			julio: 2,
			agosto: 2,
			septiembre: 2,
			octubre: 2,
			noviembre: 2,
			diciembre: 2
		},
		permisos: []
			// "companies_edit", "users_get", "users_add", "users_update", "users_toggle", "roles_get", "roles_add", "roles_update"
	};

	headersMeses = [
		{ name: 'enero', selector: '1' },
		{ name: 'febrero', selector: '2' },
		{ name: 'marzo', selector: '3' },
		{ name: 'abril', selector: '4' },
		{ name: 'mayo', selector: '5' },
		{ name: 'junio', selector: '6' },
		{ name: 'julio', selector: '7' },
		{ name: 'agosto', selector: '8' },
		{ name: 'septiembre', selector: '9' },
		{ name: 'octubre', selector: '10' },
		{ name: 'noviembre', selector: '11' },
		{ name: 'diciembre', selector: '12' }
	];

	permisos = [
		"companies_edit",
		"users_get",
		"users_add",
		"users_update",
		"users_toggle",
		"roles_get",
		"roles_add",
		"roles_update"
	];


	componentDidMount() {
		this.setState({ loading: true });
		this.apiGet();
	}

	apiPut = () => {
		console.log('apiPut - Update - INPC - Roles');
		axios({
			method: 'put',
			url: this.props.editPath,
			data: { ...this.state.data, [this.props.stateField]: this.state[this.props.stateField] },
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


	apiGet = () => {
		axios
			.get(this.props.path)
			.then((res) => {
				console.log(res)
				this.setState({ data: res.data });
				this.setState({ payload: res.data[this.props.field] });
				this.setState({ loading: false });
				this.iniciarValores(this.props.field);
				console.log(this.state.payload[this.props.field])
			})
			.catch((err) => {
				console.log(err);
			});
	};

	iniciarValores(field){
		if(field === "inpc"){
			this.valoresInicialesINPC();
		}else if(field === "permisos"){
			//this.valoresInicialesPermisos();
		}
	}

	valoresInicialesINPC(){
		let meses = {};
		for (let i = 1; i <= 12; i++) {
			const valor = this.state.payload.meses[i];
			meses[this.headersMeses[i-1].name] = valor;
		}
		
		const payload =  this.state.payload;
		const firstData = payload;
		firstData.year = this.state.payload.year;
		firstData.estado = this.state.payload.estado;

		this.setState({ data: firstData });
		this.setState({ meses: meses });
	}

	valoresInicialesPermisos(){
		let perm = [];
		for (let i = 1; i <= 12; i++) {
			const valor = this.state.payload.perm[i];
			perm[this.headersMeses[i-1].name] = valor;
		}
		
		const payload =  this.state.payload;
		const firstData = payload;
		firstData.year = this.state.payload.year;
		firstData.estado = this.state.payload.estado;

		this.setState({ data: firstData });
		this.setState({ permisos: perm });
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

	/*
	if(stateKey == "permisos"){
			this.analizarPermisos(e);
		}
	*/

	handleNested = (e, stateKey) => {
		// console.log('Handling NESTED Input');
		console.log(stateKey);
		const { name, value } = e.target;
		if(stateKey === "meses"){
			const newPayload = {...this.state.meses};
			const newData = { ...newPayload };
			newData[this.headersMeses[name-1].name] = value;
			this.setState({ meses: newData });
			console.log(this.state.meses);
		}else if(stateKey === "datos"){
			this.handleInputChange(e);//Guardar normal el campo
		}
	};
	
	handleInputChange = (e) => {
		console.log('Handling REGULAR Input');
		const data = { ...this.state.data };
		const newData = data;
		const { name, value } = e.target;
		newData[name] = value;
		this.setState({ data: newData });
		console.log(this.state.data);
	};

	render() {
		return this.props.render({
			data: this.state,
			handleNestedInputChange: this.handleNested,
			handleInputChange: this.handleInputChange,
			apiPut: this.apiPut
		});
	}
}

export default withRouter(PutFormBuilder);

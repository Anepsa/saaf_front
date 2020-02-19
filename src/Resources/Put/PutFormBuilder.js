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
		}
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

	componentDidMount() {
		this.setState({ loading: true });
		this.apiGet();
	}

	apiPut = () => {
		console.log('apiPut - Update - INPC');
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
				this.setState({ data: res.data.inpc });
				this.setState({ payload: res.data[this.props.field] });
				this.setState({ loading: false });
				this.iniciarValores();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	iniciarValores(){
		let meses = {};
		for (let i = 1; i <= 12; i++) {
			const valor = this.state.data.meses[i];
			meses[this.headersMeses[i-1].name] = valor;
		}
		
		const data =  this.state.data ;
		const firstData = data;
		firstData.year = this.state.data.year;
		firstData.estado = this.state.data.estado;

		this.setState({ data: firstData });
		this.setState({ meses: meses });
	}

	handleNested = (e, stateKey) => {
		// console.log('Handling NESTED Input');
		const newPayload = {...this.state.meses};
		const { name, value } = e.target;
		const newData = { ...newPayload };
		newData[this.headersMeses[name-1].name] = value;
		this.setState({ meses: newData });
		console.log(this.state.meses);
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

import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
class AddFormBuilder extends Component {
	state = {
		loading: false,
		payload: [],
		searchParam: '',
		formattedPayload: { datos: [ { popo: 'mierda' } ] },
		nestedData: {},
		meses: {
			enero: 1,
			febrero: 1,
			marzo: 1,
			abril: 1,
			mayo: 1,
			junio: 1,
			julio: 1,
			agosto: 1,
			septiembre: 1,
			octubre: 1,
			noviembre: 1,
			diciembre: 1
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

	apiPost = () => {
		axios({
			method: 'post',
			url: this.props.postPath,
			// data: this.state.data,
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

	handleNested = (e, stateKey) => {
		console.log('Handling NESTED Input');
		const newPayload = this.state[stateKey];
		const { name, value } = e.target;
		const newData = { ...newPayload };
		newData[name] = value;
		this.setState({ [stateKey]: newData });
		console.log(this.state);
	};

	handleInputChange = (e) => {
		if(e.target.name == "year"){
			console.log('Handling REGULAR Input');
			const data = { ...this.state.data };
			const newData = data;
			const { name, value } = e.target;
			newData[name] = value;
			this.setState({ data: newData });
			console.log(this.state);
		}else{	
			const newPayload = { ...this.state.meses };
			const { name, value } = e.target;
			const newData = { ...newPayload };
			newData[this.headersMeses[name - 1].name] = value;
			this.setState({ meses: newData });
			console.log(this.state.meses);
		}
	};
	render() {
		return this.props.render({
			data: this.state,
			handleNestedInputChange: this.handleNested,
			handleInputChange: this.handleInputChange,
			apiSubmit: this.apiPost
		});
	}
}

export default withRouter(AddFormBuilder);

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
		meses: []
	};
	apiPost = () => {
		axios({
			method: 'post',
			url: this.props.postPath,
			data: this.state.data,
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
		console.log('Handling REGULAR Input');
		const data = { ...this.state.data };
		const newData = data;
		const { name, value } = e.target;
		newData[name] = value;
		this.setState({ data: newData });
		console.log(this.state);
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

import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
class Nested extends Component {
	state = {
		loading: false,
		payload: [],
		formattedPayload: null
	};
	
	apiPost = () => {
		axios({
			method: 'post',
			url: this.props.postPath,
			data: this.state.formattedPayload,
			headers: { 'Content-Type': 'application/json' }
		})
			.then((res) => {
				const history = this.props.history
				console.log(res.data);
				history.goBack()
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleNestedInputChange = (e, stateKey) => {
		const payload = { ...this.state.payload };
		const stateTarget = [ e.target.name ];
		payload[stateTarget] = e.target.value;
		this.setState({ payload: payload });
		console.log(this.state.payload);
		const formattedPayload = { datos: this.state.payload };
		this.setState({ formattedPayload: formattedPayload });
	};

	render() {
		return this.props.render({
			data: this.state,
			handleInputChange: this.handleNestedInputChange,
			apiSubmit: this.apiPost
		});
		// return this.props.render([this.state, this.apiPut]);
	}
}

export default withRouter(Nested);

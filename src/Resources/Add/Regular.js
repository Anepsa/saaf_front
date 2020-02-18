import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
class Regular extends Component {
	state = {
		loading: false,
		payload: []
	};

	apiPost = () => {
		console.log('Posting');
		axios({
			method: 'post',
			url: this.props.postPath,
			data: this.state.data,
			headers: {
				'Content-Type': 'application/json',
				Authorization: sessionStorage.sessionToken
			}
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

	handleInputChange = (e) => {
		// Updates Nested State (Inmutably) using input's Name and Value
		const data = { ...this.state.data };
		const stateTarget = [ e.target.name ]; //Input's Name Identifier
		data[stateTarget] = e.target.value; //Assigns the Specific Key's value = to the input's value
		this.setState({ data: data }); //Sets State to New User Data
		console.log(this.state.data);
	};

	handleInputRender = (e) => {
		this.setState({ data: e }); //Sets State to New User Data
		console.log(this.state.data);
	};

	render() {
		return this.props.render({
			data: this.state,
			apiSubmit: this.apiPost,
			handleInputChange: this.handleInputChange,
			handleInputRender: this.handleInputRender,
		});
		// return this.props.render([this.state, this.apiPut]);
	}
}

export default withRouter(Regular);

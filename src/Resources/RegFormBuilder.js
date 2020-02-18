import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

import { NotificationManager } from 'react-notifications';
class FormBuilder extends Component {
	state = {
		loading: false,
		payload: [],
		searchParam: ''
	};

	componentDidMount() {
		this.setState({ loading: true });
		this.apiGet();
	}

	apiGet = () => {
		console.log("RegFormBuilder");
		axios
			.get(this.props.path, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: sessionStorage.sessionToken
				}
			})
			.then((res) => {
				console.log(res.data);
				this.setState({ payload: res.data[this.props.field] });
				this.setState({ loading: false });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	apiPut = () => {
		console.log('updating shit');
		console.log(this.state.data);
		axios({
			method: 'put',
			url: this.props.editPath,
			data: this.state.data,
			headers: {
				'Content-Type': 'application/json',
				Authorization: sessionStorage.sessionToken
			}
		})
			.then((res) => {
				const history = this.props.history;
				console.log(res.data);
				history.goBack();
				const notificationMsg = res.data.mensaje;
				NotificationManager.success("Éxito");
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
			apiPut: this.apiPut,
			handleInputChange: this.handleInputChange,
			handleInputRender: this.handleInputRender,
		});
		// return this.props.render([this.state, this.apiPut]);
	}
}

export default withRouter(FormBuilder);

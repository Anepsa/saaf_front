import { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
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
		console.log("FormBuilder copy");
		axios
			.get(this.props.path)
			.then((res) => {
				console.log(res.data);
				this.setState({ payload: res.data[this.props.field][0].datos });
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
			data: this.state.formattedPayload,
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
	handleNestedInputChange = (e, stateKey) => {
		const payload = { ...this.state.payload };
		const stateTarget = [ e.target.name ];
		payload[stateTarget] = e.target.value;
		this.setState({ payload: payload });
		console.log(this.state.payload);
		const formattedPayload = { datos: this.state.payload };
		this.setState({ formattedPayload: formattedPayload });
	};

	handleInputChange = (e) => {
		// Updates Nested State (Inmutably) using input's Name and Value
		const data = { ...this.state.data };
		const stateTarget = [ e.target.name ]; //Input's Name Identifier
		data[stateTarget] = e.target.value; //Assigns the Specific Key's value = to the input's value
		this.setState({ formattedPayload: data }); //Sets State to New User Data
		console.log(this.state.data);
  };
  
  

	render() {
		return this.props.render({
			data: this.state,
			handleInputChange: this.handleNestedInputChange,
			apiPut: this.apiPut
		});
		// return this.props.render([this.state, this.apiPut]);
	}
}

export default withRouter(FormBuilder);

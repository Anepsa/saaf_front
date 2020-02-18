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
		meses: []
	};
	componentDidMount() {
		this.setState({ loading: true });
		this.apiGet();
	}

	apiPut = () => {
		console.log('updating shit');
		console.log(this.state.data);
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
				console.log(res.data);
				this.setState({ data: res.data });
				this.setState({ payload: res.data[this.props.field] });
				this.setState({ loading: false });
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

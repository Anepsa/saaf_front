import { Component } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
export default class ApiCaller extends Component {
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
		console.log("ApiCaller");
		axios
			.get(this.props.path)
			.then((res) => {
				console.log(res.data);
				this.setState({ payload: res.data[this.props.field] });
				this.setState({ loading: false });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	apiPut = (url, itemData) => {
		console.log(url);
		console.log(itemData);
		axios
			.put(url, itemData, {
				headers: { 'Content-Type': 'application/json' }
			})
			.then((res) => {
				NotificationManager.success("Éxito");
				console.log(res.data);
				
				this.apiGet();
			
			})
			.catch((err) => {
				console.log(err);
			});
	};


	

	deactFunc = (url, data) => {
		console.log(url);
		console.log('deactivating');
		let itemData = { ...data };

		console.log(itemData);
		itemData.datos.estado = !itemData.datos.estado;
		const newData = { datos: itemData.datos };   
		this.apiPut(url, newData);
	};

	render() {
		return this.props.render({ data: this.state, apiPut: this.apiPut, deactFunc: this.deactFunc });
	}
}

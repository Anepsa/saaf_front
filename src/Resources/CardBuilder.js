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
		console.log("CardBuilder");
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

	apiPut = (url, itemData) => {
		console.log(url);
		console.log(itemData);
		axios
			.put(url, itemData, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: sessionStorage.sessionToken
				}
			})
			.then((res) => {
				console.log(res.data);
				this.apiGet();
				console.log(res.data);
				// NotificationManager.success("Éxito");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	deactFunc = (url, data) => {
		console.log(url);
		console.log('deactivating');
		let itemData = { ...data };
		itemData.estado = !itemData.estado;
		console.log(itemData);
		// itemData.datos.estado = !itemData.datos.estado;
		// const newData = { datos: itemData.datos };
		this.apiPut(url, itemData);
	};

	deleteFunc = (url) => {
		console.log(url);

		axios
			.delete(url, {
				headers: {
					'Content-Type': 'application/json'
					// Authorization: sessionStorage.sessionToken
				}
			})
			.then((res) => {
				console.log(res.data);
				this.apiGet();
				console.log(res.data);
				NotificationManager.success('Éxito');
			})
			.catch((err) => {
				console.log(err);
				NotificationManager.error('Éxito');
			});
	};

	render() {
		return this.props.render({
			data: this.state,
			apiPut: this.apiPut,
			deactFunc: this.deactFunc,
			deleteFunc: this.deleteFunc
		});
	}
}

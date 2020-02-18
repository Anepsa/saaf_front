import  React , { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Consumer } from '../../../Context/Context';
import CancelButton from '../Buttons/CancelButton';
import SubmitButton from '../Buttons/SubmitButton';
import { TextForm } from './TextForm';
// import Checkbox from 'react-icheck/lib/Checkbox';
import Checkbox from '@material-ui/core/Checkbox';
class NewPanel extends Component{
	name;
	
	constructor(props){
		super(props);
		this.name = props.name;
		console.log("props")
		console.log(props);
	}
	
	componentDidMount(){
		if(this.props.handleInputRender != undefined ){
			let data = {};
			this.props.forms.map((form) => {
				const stateTarget = [form.name];// Obtener el nombre del campo json
				data[stateTarget] = this.props.data[form.name]; // A ese campo agregar su valor
			});
			this.props.handleInputRender(data);
		}
	}

	mapNestedForms = (forms) => {
		const mappedForms = forms.map((form) => {
			const { name, type, stateKey } = form;
			console.log(this.props.data);
			if(type == "checkbox"){
				if(this.props.data.length != 0){ // Si no tiene data es por que es nuevo
					return(
						<Col md={1}>
							<Form.Group >
								<Form.Label>{form.name}</Form.Label>
								<Checkbox 
									onChange={(e) => {
										if(this.props.data[name] == true){
											this.props.data[name] = false
										}else{
											this.props.data[name] = true;
										}
										this.props.handleCheckboxChange(e, stateKey);
									}}
									checked={this.props.data[name]}
									name={name}
									placeholder={name}
									type={type}
									/>
							</Form.Group>
						</Col>
					);
				}
			}else{
				return (
					
						<TextForm
							// onChange={this.handleInputChange}
							onChange={(e) => this.props.handleInputChange(e, stateKey)}
							value={this.props.data[name]}
							name={name}
							placeholder={name}
							type={type}
							label={form.name}
						/>
					
				);
			}
		});
		return mappedForms;
	};
	// Changed apiPut to apiSubmit on line 51
	render(){

		return (
			<div>
			<Container fluid className="mainPanel animated fadeIn">
				<Consumer>
					{(context) => (
						<div className="panelContainer">
							<Row>
								<Col>
									<h5>{this.name}</h5>
								</Col>
							</Row>
							<hr />
							<Row>
								{this.mapNestedForms(this.props.forms)}
							</Row>
							<Row>
								<Col lg={12}>{this.props.children}</Col>
							</Row>
							<Row className="float-right">
								<Col>
									<CancelButton />
									<SubmitButton clicked={context.apiSubmit} />
								</Col>
							</Row>
						</div>
					)}
				</Consumer>
			</Container>
			</div>
		);
	}	
};
export default NewPanel;

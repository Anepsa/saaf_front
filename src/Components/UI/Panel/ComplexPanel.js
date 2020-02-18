import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Consumer } from '../../../Context/Context';
import CancelButton from '../Buttons/CancelButton';
import SubmitButton from '../Buttons/SubmitButton';
import { TextForm } from './TextForm';
const ComplexPanel = (props) => {
	const { name, handleInputChange, handleNestedInputChange } = props;
	const { innerData, outerData } = props;

	const mapNestedForms = (forms, i) => {
		const mappedForms = forms.map((form) => {
			const { name, type, stateKey, isNested } = form;
			let inputData = null;
			if (innerData) {
				inputData = innerData[name];
			}
			const formValues = isNested ? inputData : props.outerData[name];
			const inputHanlder = isNested ? handleNestedInputChange : handleInputChange;
			// console.log(formValues)
			return (
				<TextForm
					onChange={(e) => inputHanlder(e, stateKey)}
					value={formValues}
					name={name}
					placeholder={name}
					type={type}
					label={form.name}
				/>
			);
		});
		return mappedForms;
	};
	// Changed apiPut to apiSubmit on line 51
	return (
		<Container fluid className="mainPanel animated fadeIn">
			<Consumer>
				{(context) => (
					<div className="panelContainer">
						<Row>
							<Col>
								<h5>{name}</h5>
							</Col>
						</Row>
						<hr />
						<Row>{mapNestedForms(props.forms)}</Row>
						<Row>
							<Col lg={12}>{props.children}</Col>
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
	);
};
export default ComplexPanel;

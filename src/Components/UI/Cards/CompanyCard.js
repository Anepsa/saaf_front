import React from 'react';
import './CompanyCard.css';
import { Row, Card, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTimesCircle, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { DeactivateButton } from '../Buttons/DeactivateButton';
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions';
import { Consumer } from '../../../Context/Context';
// import { PanelControl } from "./PanelControl/PanelControl";
import { Configuracion } from '../Sidebar/Configuracion/Configuracion';
import { PanelControl } from '../Sidebar/PanelControl/PanelControl';
const CompanyCard = (props) => {
	const { link, nombre, nombre_corto, estado, url, id, itemData } = props;

	const withConfig = [ <PanelControl />, <Configuracion /> ];
	const withPanel = [ <PanelControl /> ];

	const onSelectedCompany = (event) => {
		event.preventDefault();

		if (props.isSubCompany) {
			console.log('is Subcompany');
			sessionStorage.setItem('subCompany', id);
			props.onSelectedCompany(withConfig);
		} else {
			console.log('Compan7y');
			props.onSelectedCompany(withPanel);
			// this.props.setSidebarItems()
			sessionStorage.setItem('company', id);
		}
	};

	const status = estado ? 'Desactivar' : 'Activar';

	console.log(status);
	const displayStatus = props.estado ? 'Activa' : 'Desactivada';
	return (
		<Consumer>
			{(context) => (
				<Card onClick={onSelectedCompany} className="companyCard text-center shadow-sm">
					<div className="vl" />
					<FontAwesomeIcon
						onClick={() => context.deleteFunc(`${context.deleteLink}/${id}`)}
						className="cardClose ml-auto"
						icon={faTimesCircle}
					/>
					<div className="cardCircle">
						<FontAwesomeIcon className="cardIcon" icon={faBuilding} />
					</div>
					<div className="cardInfo">
						<div className="closeButton" />
						<Link to={link}>
							<Card.Title className="cardTitle">{nombre}</Card.Title>
							<p>{nombre_corto}</p>
						</Link>
						<Card.Body>
							<Row>
								<Col sm={6}>
									<div className="small-text">Status</div>
									<p>{displayStatus}</p>
								</Col>
								<Col sm={6}>
									<div className="small-text">Rol</div>
									<p>Administrador</p>
								</Col>
							</Row>

							<Row className="float-right">
								<DeactivateButton
									itemData={itemData}
									status={status}
									deactLink={`${context.deactLink}/${id}`}
									deactFunc={context.deactFunc}
								/>

								<Link to={`${context.editLink}/${id}`}>
									<Button variant="primary  shadow-sm">Editar</Button>
								</Link>
							</Row>
						</Card.Body>
					</div>
				</Card>
			)}
		</Consumer>
	);
};
const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSelectedCompany: (setSidebarItems) => dispatch(actionCreators.selectCompany(setSidebarItems))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCard);

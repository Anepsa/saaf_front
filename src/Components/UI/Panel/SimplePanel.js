import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AddButton } from '../Buttons/AddButton';
import { SearchForm } from './SearchForm';

import { Consumer } from '../../../Context/Context';
import DynamicTable from '../Table/DynamicTable/DynamicTable';
import OuterDynamicTable from '../Table/DynamicTable/OuterDynamicTable';

const SimplePanel = (props) => {
	const { name } = props;

	return (
		<Container fluid className="mainPanel animated fadeIn">
			<Consumer>
				{(context) => (
					<div className="panelContainer">
						<Row>
							<Col>
								<h5>{name}</h5>
							</Col>
							<AddButton className="float-right" link={context.addButtonLink} />
						</Row>
						<hr />
						<hr />
						<Row>
							<Col lg={12}>{props.children}</Col>
						</Row>
				
						<Row>
							<Col lg={2}>{/* <ItemsPerPage /> */}</Col>
						</Row>
					</div>
				)}
			</Consumer>
		</Container>
	);
};

export default SimplePanel;

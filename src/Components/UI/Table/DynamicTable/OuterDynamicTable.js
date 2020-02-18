import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { EditButton } from '../../Buttons/EditButton';
import { DeactivateButton } from '../../Buttons/DeactivateButton';
import { Consumer } from '../../../../Context/Context';

export default class OuterDynamicTable extends Component {
	render() {
		const { dataSelector } = this.props;
		// =======================Table Data and Headers ============================
		const mappedHeaders = this.props.headers.map((header, i) => {
			return <th key={i}>{header.name}</th>;
		});

		const generateRow = (item, index, tHeaders) => {
			console.log(item.estado);
			console.log(item[dataSelector]);

			const { _id, estado, year } = item;
			const id = _id;

			// const { estado } = item[dataSelector]; // Comment #A Causes Crash if data not structured
			const displayStatus = estado ? <div className="active">Sí</div> : <div className="danger">No</div>;
			return (
				<Consumer>
					{(context) => (
						<tr>
							<td>{year} </td>
							{tHeaders.map((header, i) => {
								return (
									<td key={item._id + i}>{item[dataSelector][header.selector]}</td> // Comment #B If Data Selector not Specified in View App Will Crash
								);
							})}

							<td>{displayStatus}</td>
							{/* <td>{this.props.estado}</td> */}
							<td>
								<EditButton link={`${context.editButtonLink}/${id}`} />
								{/* <DeactivateButton
									apiGet={context.apiGet}
									// status={estado}
									deactLink={`${context.deactLink}/${id}`}
									apiPut={context.apiPut}
									itemData={item}
									deactivate={context.deactFunc}
								/> */}
							</td>
						</tr>
					)}
				</Consumer>
			);
		};
		// =============================================================================
		return (
			<Table className="text-center" striped bordered hover>
				<thead>
					<tr>
						<th>Year</th>
						{mappedHeaders}
						<th>Activo</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>{this.props.data.map((item, index) => generateRow(item, index, this.props.headers))}</tbody>
			</Table>
		);
	}
}

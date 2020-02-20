import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
// import { DeactivateButton } from '../../Buttons/DeactivateButton';
import { Consumer } from '../../../../../Context/Context';
import { EditButton } from '../../../../UI/Buttons/EditButton';

export default class OuterDynamicTable extends Component {
	render() {
		const { dataSelector } = this.props;
		// =======================Table Data and Headers ============================
		const mappedHeaders = this.props.headers.map((header, i) => {
			return <th key={i}>{header.name}</th>;
		});
		const generateRow = (item, index, tHeaders) => {
			// console.log(item.estado);
			// console.log(item[dataSelector]);
			const { _id, estado, nombre } = item;
			const id = _id;
			// const { estado } = item[dataSelector]; // Comment #A Causes Crash if data not structured
			const displayStatus = estado ? <div className="active">Sí</div> : <div className="danger">No</div>;
			return (
				<Consumer>
					{(context) => (
						<tr>
							<td>{nombre} </td>
							<td>{displayStatus}</td>
							<td>
								<EditButton link={`${this.props.editButtonLink}/${id}`} />{' '}
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

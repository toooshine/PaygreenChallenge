import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, Input } from 'reactstrap';

export default class BeneficiaryClient extends React.Component {
	render() {
		return (
			<div>
				<Label style={{ color: 'grey' }}>N° paiement</Label>
				<FormGroup>
					<Input
						type="text"
						name="PaiementNumber"
						id="PaiementNumber"
						maxLength="10"
						required
						value={this.props.idPsp ? this.props.idPsp : ''}
						readOnly
					/>
				</FormGroup>
			</div>
		);
	}
}

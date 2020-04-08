import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, CustomInput } from 'reactstrap';

export default class PaymentMethod extends React.Component {
	constructor() {
		super();
		this.state = { error: true };
	}
	handleClickPaymentMode = (paymentMode) => {
		this.setState({ error: false });
		this.props.handleClickPaymentMode(paymentMode);
	};
	render() {
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Mode de paiement</Label>
					{this.props.errorPaymentMode && this.state.error ? (
						<span style={{ color: '#C82333' }}>Votre mode de paiement est manquant</span>
					) : null}
				</div>
				<FormGroup style={{ display: 'flex', justifyContent: 'center' }}>
					<CustomInput
						type="radio"
						id="paymentMode"
						name="paymentMode"
						onClick={() => this.handleClickPaymentMode('Comptant')}
					/>
					<span style={{ fontWeight: 'bold', color: 'grey' }}>Comptant</span>
				</FormGroup>
			</div>
		);
	}
}

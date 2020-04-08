import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, Input, InputGroupText, InputGroupAddon, InputGroup } from 'reactstrap';

export default class Amount extends React.Component {
	constructor() {
		super();
		this.state = { amount: '', error: true, check: false };
	}
	handleClickAmount = (amount) => {
		this.setState({ amount: amount, error: false });
		if (!amount) {
			this.setState({ check: true });
		} else {
			this.setState({ check: false });
		}
		this.props.handleClickAmount(amount);
	};
	render() {
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Montant</Label>
					{(this.props.errorAmount && this.state.error) || this.state.check ? (
						<span style={{ color: '#C82333' }}>Le montant est manquant</span>
					) : null}
				</div>

				<FormGroup style={{ marginBottom: '10px' }}>
					<InputGroup>
						<Input
							type="text"
							name="bill"
							placeholder="Montant"
							required
							onChange={(e) =>
								e.target.value > 0 || !e.target.value ? this.handleClickAmount(e.target.value) : null}
							value={this.state.amount}
						/>

						<InputGroupAddon addonType="prepend">
							<InputGroupText>€</InputGroupText>
						</InputGroupAddon>
					</InputGroup>
					<p style={{ color: 'grey', textAlign: 'center' }}>Montant total de la transaction</p>
				</FormGroup>
			</div>
		);
	}
}

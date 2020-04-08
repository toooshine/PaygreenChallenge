import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class CryptoNumberrCard extends React.Component {
	constructor() {
		super();
		this.state = {
			cryptoNumberValue: '',
			errorNumber: false
		};
	}

	handleChangeryptoNumber = ({ target: { value } }) => {
		value = value
			// Remove all non-digits
			.replace(/\D+/, '')
			// Stick to first 16, ignore later digits
			.slice(0, 3);

		if (value.length === 3) {
			this.setState({ errorNumber: true });
		} else {
			this.setState({ errorNumber: false });
		}
		this.setState({ cryptoNumberValue: value });
		this.props.cryptoNumberCard(value);
	};

	render() {
		return (
			<FormGroup>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Cryptogramme visuel</Label>
					{this.props.errorcryptoNumber && !this.state.errorNumber ? (
						<span style={{ color: '#C82333' }}>Cryptogramme visuel manquant ou invalide</span>
					) : null}
				</div>
				<Input
					type="text"
					name="cryptoNumber"
					id="cryptoNumber"
					placeholder="Cryptogramme visuel"
					required
					value={this.state.cryptoNumberValue}
					onChange={this.handleChangeryptoNumber}
				/>
			</FormGroup>
		);
	}
}

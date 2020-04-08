import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, Input, InputGroupText, InputGroupAddon } from 'reactstrap';

export default class CardItem extends React.Component {
	constructor() {
		super();
		this.state = { cardNumberValue: '', idCardFound: '', error: true, isValidNumberLength: false };
	}

	handleChangeCardNumber = ({ target: { value } }) => {
		value = value
			// Remove all non-digits
			.replace(/\D+/, '')
			// Stick to first 16, ignore later digits
			.slice(0, 18)
			// Add a space after any 4-digit group followed by more digits
			.replace(/(\d{4})(?=\d)/g, '$1 ');

		if (value.substr(0) === '4') {
			this.setState({ idCardFound: 'Visa' });
		} else if (
			value.substr(0, 2) === '51' ||
			value.substr(0, 2) === '52' ||
			value.substr(0, 2) === '53' ||
			value.substr(0, 2) === '54' ||
			value.substr(0, 2) === '55'
		) {
			this.setState({ idCardFound: 'Mastercard' });
		} else if (value.substr(0, 2) === '34' || value.substr(0, 2) === '37') {
			this.setState({ idCardFound: 'American-Express' });
		} else {
			this.setState({ idCardFound: '' });
		}
		if (value.length === 19) {
			this.setState({ isValidNumberLength: false });
		} else {
			this.setState({ isValidNumberLength: true });
		}
		this.setState({ cardNumberValue: value, error: false });
		this.props.handleClickParent(value);
	};
	render() {
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Numéro de carte</Label>
					{(this.props.errorCardNumber && this.state.error) || this.state.isValidNumberLength ? (
						<span style={{ color: '#C82333' }}>Numéro de carte manquant ou non valide</span>
					) : null}
				</div>
				<FormGroup style={{ display: 'flex', paddindRight: '10px' }}>
					<Input
						type="text"
						name="cardNumber"
						id="cardNumber"
						placeholder="Numéro de carte"
						required
						value={this.state.cardNumberValue}
						onChange={this.handleChangeCardNumber}
					/>
					{this.state.idCardFound ? (
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<img
									alt=""
									src={require(`../../images/${this.state.idCardFound}.png`)}
									style={{ width: '40px', height: '25' }}
								/>
							</InputGroupText>
						</InputGroupAddon>
					) : (
						''
					)}
				</FormGroup>
			</div>
		);
	}
}

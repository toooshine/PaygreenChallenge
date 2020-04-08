import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class IdPayGreen extends React.Component {
	constructor() {
		super();
		this.state = {
			idPayGreen: '',
			errorId: false,
			errorEmptyNumber: false
		};
	}

	handleClickIdPaygreen = ({ target: { value } }) => {
		value = value
			// Remove all non-digits
			.replace(/\D+/, '');
		if (value.substr(0) === '0') {
			this.setState({ errorEmptyNumber: true, idPayGreen: '' });
		} else {
			this.setState({ idPayGreen: value, errorId: true, errorEmptyNumber: false });
			this.props.idPayGreen(value);
		}
	};

	render() {
		console.log('id', this.state.idPayGreen);
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Identifiant(Paygreen)</Label>
					{(this.props.errorIdPayGreen && !this.state.errorNumber) || this.state.errorEmptyNumber ? (
						<span style={{ color: '#C82333' }}>Identifiant manquant ou invalide</span>
					) : null}
				</div>
				<Input
					type="text"
					name="idPayGreen"
					id="idPayGreen"
					maxLength="5"
					required
					onChange={this.handleClickIdPaygreen}
					value={this.state.idPayGreen}
				/>
				<p style={{ color: 'grey', textAlign: 'center' }}>Cet identifiant est absolument unique</p>
				<FormGroup />
			</div>
		);
	}
}

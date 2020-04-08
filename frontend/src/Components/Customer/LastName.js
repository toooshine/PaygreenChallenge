import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class LastName extends React.Component {
	constructor() {
		super();
		this.state = { lastName: '' };
	}

	checkLastName = ({ target: { value } }) => {
		value = value
			// Remove all non-digits
			.replace(/\d+/g, '');

		this.setState({ lastName: value });
		this.props.lastName(value);
	};

	render() {
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Nom</Label>
					{this.props.errorLastName && !this.state.lastName ? (
						<span style={{ color: '#C82333' }}>Votre nom est manquant</span>
					) : null}
				</div>
				<FormGroup>
					<Input
						type="lastName"
						name="lastName"
						id="lastName"
						placeholder="Nom"
						required
						value={this.state.lastName}
						onChange={this.checkLastName}
					/>
				</FormGroup>
			</div>
		);
	}
}

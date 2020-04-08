import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class FirstName extends React.Component {
	constructor() {
		super();
		this.state = { firstName: '' };
	}

	checkFirstNameLetter = ({ target: { value } }) => {
		value = value
			// Remove all non-digits
			.replace(/\d+/g, '');

		this.setState({ firstName: value });
		this.props.firstName(value);
	};

	render() {
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Prénom</Label>
					{this.props.errorFirstName && !this.state.firstName ? (
						<span style={{ color: '#C82333' }}>Votre prénom est manquant</span>
					) : null}
				</div>
				<FormGroup>
					<Input
						type="firstName"
						name="firstName"
						id="firstName"
						placeholder="Prénom"
						required
						value={this.state.firstName}
						onChange={this.checkFirstNameLetter}
					/>
				</FormGroup>
			</div>
		);
	}
}

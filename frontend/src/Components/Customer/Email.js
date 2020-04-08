import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Email extends React.Component {
	constructor() {
		super();
		this.state = { email: '', invalidEmail: false };
	}

	checkEmail = (email) => {
		this.setState({ email: email });
		const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (email.match(mailformat)) {
			this.setState({ invalidEmail: false });
			this.props.checkedEmail(email);
		} else {
			this.setState({ invalidEmail: true });
		}
	};

	render() {
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Email</Label>
					{this.state.invalidEmail || this.props.errorEmail ? (
						<span style={{ color: '#C82333' }}>Votre email est invalide</span>
					) : null}
				</div>
				<FormGroup>
					<Input
						type="email"
						name="email"
						id="Email"
						placeholder="Email"
						onChange={(e) => this.checkEmail(e.target.value)}
						value={this.state.email}
						required
					/>
				</FormGroup>
			</div>
		);
	}
}

import React from 'react';
import { Card, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderTransaction from './HeaderTransaction';
import Email from './Customer/Email';
import IdPayGreen from './Customer/IdPayGreen';
import FirstName from './Customer/FirstName';
import LastName from './Customer/LastName';
import background from '../images/background.jpg';

export default class Payment extends React.Component {
	constructor() {
		super();
		this.state = {
			idPsp: '',
			email: '',
			firstName: '',
			lastName: '',
			idPayGreen: '',
			errorLastName: false,
			errorFirstName: false,
			errorEmail: false,
			errorIdPayGreen: false
		};
	}

	checkedEmail = (email, erroremail) => {
		this.setState({ email: email, errorEmail: false });
		console.log('email', email);
	};

	idPayGreen = (idPayGreen) => {
		this.setState({ idPayGreen: idPayGreen });
	};

	firstName = (firstName) => {
		this.setState({ firstName: firstName });
		console.log('firstName', firstName);
	};

	lastName = (lastName) => {
		this.setState({ lastName: lastName });
		console.log('lastName', lastName);
	};

	handleSubmit = () => {
		if (
			this.props.location.state &&
			this.state.email &&
			this.state.firstName &&
			this.state.lastName &&
			this.state.idPayGreen
		) {
			fetch(
				'http://localhost:3000/information',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					body: `cardtype=${this.props.location.state.card}&amount=${this.props.location.state
						.amount}&idPsp=${this.props.location.state.idPsp}&paymentMode=${this.props.location.state
						.paymentMode}&idPaygreen=${this.state.idPayGreen}&firstName=${this.state
						.firstName}&lastName=${this.state.lastName}&email=${this.state
						.email}&href=http://localhost:3001/Transaction?${this.props.location.state.idPsp}`
				},
				this.props.history.push('/Summary', this.props.location.state.idPsp)
			).catch((error) => {
				console.error(error);
			});
		} else {
			if (!this.state.email) {
				this.setState({ errorEmail: true });
			}
			if (!this.state.firstName) {
				this.setState({ errorFirstName: true });
			}
			if (!this.state.lastName) {
				this.setState({ errorLastName: true });
			}
			if (!this.state.idPayGreen) {
				this.setState({ errorIdPayGreen: true });
			}
		}
	};

	render() {
		const style = {
			display: {
				marginTop: 50,
				textAlign: 'center',
				color: '#d63031'
			}
		};
		return (
			<div style={{ backgroundImage: `url(${background})`, width: '100%', height: '100%' }}>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Card
						style={{
							marginTop: '40px',
							backgroundColor: '#F3F5F7',
							width: '30rem'
						}}
					>
						<HeaderTransaction />
						<p style={{ color: 'grey', textAlign: 'center' }}>
							Information du client qui utilisera ce lien de paiement
						</p>
						<p
							style={{
								color: '#50C3B9',
								fontWeight: 'bold',
								fontSize: 'large',
								textDecoration: 'underline'
							}}
						>
							Le client (destinataire)
						</p>
						<Email checkedEmail={this.checkedEmail} errorEmail={this.state.errorEmail} />
						<IdPayGreen idPayGreen={this.idPayGreen} errorIdPayGreen={this.state.errorIdPayGreen} />
						<FirstName firstName={this.firstName} errorFirstName={this.state.errorFirstName} />
						<LastName lastName={this.lastName} errorLastName={this.state.errorLastName} />
						<div style={{ display: 'flex', justifyContent: 'space-around' }}>
							<Button style={{ backgroundColor: '#C82333', border: 0 }}>Annuler</Button>
							<Button style={{ backgroundColor: '#218838', border: 0 }} onClick={this.handleSubmit}>
								Continuer
							</Button>
						</div>
						<p style={style.display}>{this.state.errorMessage}</p>
					</Card>
				</div>
			</div>
		);
	}
}

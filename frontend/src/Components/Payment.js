import React from 'react';
import { Card, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderTransaction from './HeaderTransaction';
import PaymentMethod from './Payment/PaymentMethod';
import Amount from './Payment/Amount';
import CardItem from './Payment/CardItem';
import PaiementNumber from './Payment/PaiementNumber';
import background from '../images/background.jpg';

export default class Payment extends React.Component {
	constructor() {
		super();
		this.state = {
			card: '',
			amount: '',
			idPsp: '',
			paymentMode: '',
			errorCard: false,
			errorAmount: false,
			errorPaymentMode: false,
			errorIdPsp: false
		};
	}

	componentDidMount() {
		this.setState({ idPsp: Math.floor(Math.random() * Math.floor(10000000000)) });
	}

	handleSubmit = () => {
		if (this.state.card && this.state.amount && this.state.idPsp && this.state.paymentMode) {
			this.props.history.push('/Customer', this.state);
		} else {
			if (!this.state.card) {
				this.setState({ errorCard: true });
			}
			if (!this.state.paymentMode) {
				this.setState({ errorPaymentMode: true });
			}
			if (!this.state.amount) {
				this.setState({ errorAmount: true });
			}
			if (!this.state.idPsp) {
				this.setState({ errorIdPsp: true });
			}
		}
	};

	handleClickCardSelected = (card) => {
		this.setState({ card: card });
	};

	handleClickPaymentMode = (paymentMode) => {
		this.setState({ paymentMode: paymentMode });
	};

	handleAmount = (amount) => {
		this.setState({ amount: amount });
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
			<div style={{ backgroundImage: `url(${background})`, width: '100%', height: '100vh' }}>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Card
						style={{
							marginTop: '40px',
							backgroundColor: '#F3F5F7',
							width: '30rem'
						}}
					>
						<HeaderTransaction />
						<p
							style={{
								color: '#50C3B9',
								fontWeight: 'bold',
								fontSize: 'large',
								textDecoration: 'underline'
							}}
						>
							Le paiement
						</p>
						<CardItem
							handleClickCardSelected={this.handleClickCardSelected}
							errorCard={this.state.errorCard}
						/>
						<PaymentMethod
							handleClickPaymentMode={this.handleClickPaymentMode}
							errorPaymentMode={this.state.errorPaymentMode}
						/>
						<Amount handleClickAmount={this.handleAmount} errorAmount={this.state.errorAmount} />
						<PaiementNumber idPsp={this.state.idPsp} />
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

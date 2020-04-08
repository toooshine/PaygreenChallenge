import React from 'react';
import { Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderTransaction from './HeaderTransaction';
import background from '../images/background.jpg';
import SummaryPayment from './Summary/SummaryPayment';
import CopyLink from './Summary/CopyLink';

export default class Summary extends React.Component {
	constructor() {
		super();
		this.state = {
			paymentMode: '',
			cardType: '',
			amount: '',
			firstName: '',
			lastName: '',
			imgCardType: '',
			href: ''
		};
	}

	componentDidMount() {
		var ctx = this;
		console.log('signin from front handled...');

		fetch(`http://localhost:3000/summarypayment?idPsp=${this.props.location.state}`)
			.then(function(res, err) {
				return res.json();
			})
			.then(function(data) {
				ctx.setState({
					paymentMode: data.customer.paymentMode,
					cardType: data.customer.cardtype,
					imgCardType: require(`../images/${data.customer.cardtype}.png`),
					amount: data.customer.amount,
					firstName: data.customer.firstName,
					lastName: data.customer.lastName,
					href: data.customer.href
				});
				console.log(data);
			})
			.catch(function(err) {
				console.log(err);
			});
	}

	render() {
		console.log(this.props);
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
							Récapitulatif:
						</p>
						<CopyLink href={this.state.href} />
						<SummaryPayment
							lastName={this.state.lastName}
							firstName={this.state.firstName}
							amount={this.state.amount}
							cardType={this.state.cardType}
							imgCardType={this.state.imgCardType}
							paymentMode={this.state.paymentMode}
						/>
					</Card>
				</div>
			</div>
		);
	}
}

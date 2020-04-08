import React from 'react';
import { Button, Form, Card, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderTransaction from './HeaderTransaction';
import CardNumber from './Transaction/CardNumber';
import ExpiredCard from './Transaction/ExpiredCard';
import Footer from './Transaction/Footer';
import CryptoNumberCard from './Transaction/CryptoNumberCard';
import background from '../images/background.jpg';

export default class Transaction extends React.Component {
	constructor() {
		super();
		this.state = {
			expiredMonth: '',
			expiredYear: '',
			cardNumber: '',
			cryptoNumber: '',
			idPsp: '',
			total: '',
			activeButton: false,
			errorCardNumber: false,
			errorcryptoNumber: false,
			errorExpiredMonth: false,
			errorExpiredYaer: false
		};
	}

	handleClickTansaction = () => {
		this.props.history.push('/TableTransactions');
	};

	extractParamsUrl = (chaineGET) => {
		chaineGET = chaineGET.split('&');
		let result = '';

		chaineGET.forEach(function(el) {
			let param = el.split('=');
			param[0] = param[0].replace('?', '');
			result = param[0];
		});

		return result;
	};

	componentDidMount() {
		var ctx = this;

		fetch(`http://localhost:3000/summarypayment?idPsp=${this.extractParamsUrl(this.props.location.search)}`)
			.then(function(res, err) {
				return res.json();
			})
			.then(function(data) {
				ctx.setState({ total: data.customer.amount });
			})
			.catch(function(err) {
				console.log(err);
			});
	}

	handleCancel = () => {
		this.props.history.push('/');
	};

	handleSubmit = () => {
		const ctx = this;
		if (
			this.extractParamsUrl(this.props.location.search) &&
			this.state.cardNumber &&
			this.state.cryptoNumber &&
			this.state.expiredMonth &&
			this.state.expiredYear
		) {
			fetch('http://localhost:3000/transaction', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: `idPsp=${this.extractParamsUrl(this.props.location.search)}&cardNumber=${this.state
					.cardNumber}&cryptogramCard=${this.state.cryptoNumber}&expiredMonth=${this.state
					.expiredMonth}&expiredYear=${this.state.expiredYear}`
			})
				.then(function(res, err) {
					return res.json();
				})
				.then(function(data) {
					if (data.result === true) {
						ctx.setState({
							activeButton: true
						});
					}
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			if (!this.state.cardNumber) {
				this.setState({ errorCardNumber: true });
			}
			if (!this.state.cryptoNumber) {
				this.setState({ errorcryptoNumber: true });
			}
			if (!this.state.expiredMonth) {
				this.setState({ errorExpiredMonth: true });
			}
			if (!this.state.expiredYear) {
				this.setState({ errorExpiredYear: true });
			}
		}
	};

	cryptoNumberCard = (crypto) => {
		this.setState({ cryptoNumber: crypto });
	};

	handleCardValue = (idCard) => {
		this.setState({ cardNumber: idCard });
	};

	handleClickMonthExpired = (month) => {
		this.setState({ expiredMonth: month });
	};

	handleClickYearExpired = (year) => {
		this.setState({ expiredYear: year });
	};

	render() {
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
						<Form style={{ marginTop: '5px' }}>
							<CardNumber
								handleClickParent={this.handleCardValue}
								errorCardNumber={this.state.errorCardNumber}
							/>
							<ExpiredCard
								expiredMonth={this.handleClickMonthExpired}
								expiredYear={this.handleClickYearExpired}
								errorExpiredMonth={this.state.errorExpiredMonth}
								errorExpiredYear={this.state.errorExpiredMonth}
							/>
							<CryptoNumberCard
								cryptoNumberCard={this.cryptoNumberCard}
								errorcryptoNumber={this.state.errorcryptoNumber}
							/>
							<div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
								<Button style={{ backgroundColor: '#C82333', border: 0 }} onClick={this.handleCancel}>
									Annuler
								</Button>
								{this.state.activeButton ? (
									<Button color="primary" onClick={this.handleClickTansaction}>
										Voir les transactions
									</Button>
								) : (
									<Button
										style={{ backgroundColor: '#218838', border: 0 }}
										onClick={this.handleSubmit}
									>
										Valider
									</Button>
								)}
							</div>
						</Form>
						{this.state.activeButton ? (
							<Alert style={{ textAlign: 'center' }} color="success">
								Transaction effectuéé
							</Alert>
						) : null}
						<Footer total={this.state.total} />
					</Card>
				</div>
			</div>
		);
	}
}

import React from 'react';
import { Table, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import background from '../images/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default class TableTransactions extends React.Component {
	constructor() {
		super();
		this.state = {
			allTransactions: [],
			expiredMonth: '',
			expiredYear: '',
			cardNumber: '',
			cryptoNumber: '',
			idPsp: '',
			total: ''
		};
	}

	componentDidMount() {
		var ctx = this;
		console.log('signin from front handled...');

		fetch(`http://localhost:3000/allTransactions`)
			.then(function(res, err) {
				return res.json();
			})
			.then(function(data) {
				ctx.setState({
					allTransactions: data.allTransactions
				});
			})
			.catch(function(err) {
				console.log(err);
			});
	}

	render() {
		let allTransactions = [];
		this.state.allTransactions.map((transaction, i) => {
			allTransactions.push(
				<tr key={i}>
					<th scope="row">{i + 1}</th>
					<td>{transaction.idPsp}</td>
					<td style={{ color: 'black' }}>{transaction.amount}€</td>
					<td style={{ color: 'black' }}>{transaction.paymentMode}</td>
					<td>
						<img
							alt={`carte ${this.props.cardType}`}
							src={require(`../images/${transaction.cardtype}.png`)}
							title={`${transaction.cardtype}`}
							style={{ width: '40px', height: '25' }}
						/>
					</td>
					<td style={{ color: '#218838' }}>
						<FontAwesomeIcon size="1x" style={{ color: '#218838' }} icon={faCheckCircle} />Validé
					</td>
					<td>
						{transaction.firstName}&nbsp;{transaction.lastName}
					</td>
				</tr>
			);
		});

		return (
			<div style={{ backgroundImage: `url(${background})`, width: '100%', height: '100vh' }}>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Card
						style={{
							marginTop: '40px',
							backgroundColor: '#F3F5F7'
						}}
					>
						<p
							style={{
								color: '#50C3B9',
								fontWeight: 'bold',
								fontSize: 'large',
								textDecoration: 'underline'
							}}
						>
							Toutes les transactions
						</p>
						<Table striped>
							<thead style={{ color: 'grey' }}>
								<tr>
									<th>ID</th>
									<th>Référencee</th>
									<th>Montant</th>
									<th>Mode de P.</th>
									<th>Moyen de P.</th>
									<th>Statut</th>
									<th>Client</th>
								</tr>
							</thead>
							<tbody style={{ color: 'grey', textAlign: 'center' }}>{allTransactions}</tbody>
						</Table>
					</Card>
				</div>
			</div>
		);
	}
}

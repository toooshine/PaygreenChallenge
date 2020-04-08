import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default class SummaryPayment extends React.Component {
	render() {
		return (
			<Card style={{ backgroundColor: '#e8e9ea' }}>
				<CardBody style={{ color: 'grey' }}>
					<CardTitle style={{ fontWeight: 'bold', marginBottom: '10px' }}>Le paiement</CardTitle>
					<CardSubtitle style={{ marginBottom: '5px' }}>
						<FontAwesomeIcon size="1x" style={{ marginRight: '5px' }} icon={faAngleRight} />
						Moyen de paiement :
						<span style={{ fontWeight: 'bold', marginLeft: '10px' }}>
							<img
								alt={`carte ${this.props.cardType}`}
								src={this.props.imgCardType}
								title={`${this.props.cardType}`}
								style={{ width: '40px', height: '25' }}
							/>
							{' ' + this.props.cardType}
						</span>
					</CardSubtitle>
					<CardSubtitle style={{ marginBottom: '5px' }}>
						<FontAwesomeIcon size="1x" style={{ marginRight: '5px' }} icon={faAngleRight} />Mode de paiement
						: <span style={{ fontWeight: 'bold', marginLeft: '10px' }}>{this.props.paymentMode}</span>
					</CardSubtitle>
					<CardSubtitle style={{ marginBottom: '5px' }}>
						<FontAwesomeIcon size="1x" style={{ marginRight: '5px' }} icon={faAngleRight} />Montant :
						<span style={{ fontWeight: 'bold', marginLeft: '10px' }}>{this.props.amount}€</span>
					</CardSubtitle>
					<CardSubtitle style={{ marginBottom: '5px' }}>
						<FontAwesomeIcon size="1x" style={{ marginRight: '5px' }} icon={faAngleRight} />Client(e) :
						<span style={{ fontWeight: 'bold', marginLeft: '10px' }}>
							{this.props.firstName + ' ' + this.props.lastName}
						</span>
					</CardSubtitle>
				</CardBody>
			</Card>
		);
	}
}

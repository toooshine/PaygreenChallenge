import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, CustomInput } from 'reactstrap';

export default class CardItem extends React.Component {
	constructor() {
		super();
		this.state = { cardItem: false };
	}
	handleClick = (card) => {
		this.setState({ cardItem: true });
		this.props.handleClickCardSelected(card);
	};

	render() {
		const cardAvailable = [
			{
				title: 'Visa',
				img: require('../../images/Visa.png')
			},
			{
				title: 'Mastercard',
				img: require('../../images/Mastercard.png')
			},
			{
				title: 'American-Express',
				img: require('../../images/American-Express.png')
			}
		];
		let cardList = [];
		for (let i = 0; i < cardAvailable.length; i++) {
			cardList.push(
				<CustomInput
					type="radio"
					key={i}
					id={i}
					name="customRadio"
					onClick={() => this.handleClick(cardAvailable[i].title)}
				>
					<img
						alt={cardAvailable[i].title}
						key={i}
						src={cardAvailable[i].img}
						title={cardAvailable[i].title}
						style={{ width: '64px', height: '40' }}
					/>
				</CustomInput>
			);
		}
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<Label style={{ color: 'grey' }}>Moyen de paiement</Label>
					{this.props.errorCard && !this.state.cardItem ? (
						<span style={{ color: '#C82333' }}>Votre moyen de paiement est manquant</span>
					) : null}
				</div>
				<FormGroup>
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>{cardList}</div>
				</FormGroup>
			</div>
		);
	}
}

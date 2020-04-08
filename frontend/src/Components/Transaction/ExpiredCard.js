import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class ExpiredCard extends React.Component {
	constructor() {
		super();
		this.state = {
			expiredMonth: '',
			expiredYear: '',
			errorMonth: false,
			errorYear: false
		};
	}
	handleGetMonth = (month) => {
		this.setState({ errorMonth: true });
		this.props.expiredMonth(month);
	};

	handleGetYear = (year) => {
		this.setState({ errorYear: true });
		this.props.expiredYear(year);
	};

	render() {
		//Afficher le nombre de mois dans le input expiredMonth
		let months = [];
		let expiredYear = [];
		for (let i = 1; i < 13; i++) {
			months.push(<option key={i}>{('0' + i).slice(-2)}</option>);
		}
		for (let i = new Date().getFullYear(); i < new Date().getFullYear() + 4; i++) {
			expiredYear.push(<option key={i}>{i}</option>);
		}
		return (
			<div className="form-inline" style={{ justifyContent: 'space-around', marginBottom: '10px' }}>
				<FormGroup style={{ justifyContent: 'flex-start' }}>
					<Label style={{ color: 'grey' }}>Expire fin: &nbsp;</Label>
					<Input
						type="select"
						name="select"
						id="expiredMonth"
						placeholder="Mois"
						required
						onChange={(e) => {
							this.handleGetMonth(e.target.value);
						}}
					>
						{months}
					</Input>
					&nbsp;/&nbsp;
					<Input
						type="select"
						name="expiredYear"
						id="expiredYear"
						placeholder="Année"
						required
						onChange={(e) => {
							this.handleGetYear(e.target.value);
						}}
					>
						{expiredYear}
					</Input>
				</FormGroup>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					{(this.props.errorExpiredMonth && !this.state.errorMonth) ||
					(this.state.errorExpiredYear && !this.state.errorYear) ? (
						<span style={{ color: '#C82333' }}>Votre moyen de paiement est manquant</span>
					) : null}
				</div>
			</div>
		);
	}
}

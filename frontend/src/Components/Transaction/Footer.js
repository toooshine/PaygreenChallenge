import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Footer extends React.Component {
	render() {
		return (
			<div
				style={{
					backgroundColor: '#35AD74',
					width: '100%',
					height: '5rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<span style={{ color: 'white', fontWeight: 'bold' }}>Total:&nbsp;</span>
				<span style={{ color: 'white', fontWeight: 'bold' }}>{this.props.total}€</span>
			</div>
		);
	}
}

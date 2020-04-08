import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCertificate, faLock } from '@fortawesome/free-solid-svg-icons';

export default class HeaderTransaction extends React.Component {
	render() {
		return (
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<span style={{ fontWeight: 'bolder', color: 'black' }}>Pay</span>
					<span style={{ color: 'black' }}>Green</span>
				</div>
				<div>
					<FontAwesomeIcon size="1x" style={{ color: '#218838', marginRight: '5px' }} icon={faLock} />
					<FontAwesomeIcon size="1x" style={{ color: '#218838', marginRight: '5px' }} icon={faCertificate} />
					<FontAwesomeIcon size="1x" style={{ color: '#218838', marginRight: '5px' }} icon={faCreditCard} />
				</div>
			</div>
		);
	}
}

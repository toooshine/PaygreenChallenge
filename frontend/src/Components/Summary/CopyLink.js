import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default class CopyLink extends React.Component {
	copyToClipboard = () => {
		const textArea = document.createElement('textarea');
		textArea.value = this.props.href;
		document.body.appendChild(textArea);
		textArea.select();

		try {
			document.execCommand('copy');
		} catch (e) {
			console.warn(e);
		}

		document.body.removeChild(textArea);
	};

	render() {
		return (
			<div style={{ display: 'flex', marginTop: '1rem' }}>
				<div>
					<span display={{ marginRight: '9rem' }}>
						<FontAwesomeIcon size="1x" style={{ color: 'grey', marginRight: '20px' }} icon={faLink} />
						<span style={{ textDecoration: 'underline', textDecorationColor: '#50C3B9' }}>
							{this.props.href}
						</span>
					</span>
					<Button
						style={{ borderColor: '#50C3B9', color: '#50C3B9', marginLeft: '10rem' }}
						size="sm"
						outline
						onClick={this.copyToClipboard}
					>
						COPIER
					</Button>
					<div style={{ marginBottom: '5rem', color: 'grey', fontSize: 'small' }}>
						<p>Transmettez ce lien à votre client afin qu'il règle sa commande.</p>
					</div>
				</div>
			</div>
		);
	}
}

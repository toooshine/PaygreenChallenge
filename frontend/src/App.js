import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Payment from './Components/Payment';
import Customer from './Components/Customer';
import Summary from './Components/Summary';
import Transaction from './Components/Transaction';
import TableTransactions from './Components/TableTransactions';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Payment} />
					<Route exact path="/Customer" component={Customer} />
					<Route exact path="/Summary" component={Summary} />
					<Route exact path="/Transaction" component={Transaction} />
					<Route exact path="/TableTransactions" component={TableTransactions} />
				</Switch>
			</Router>
		);
	}
}
export default App;

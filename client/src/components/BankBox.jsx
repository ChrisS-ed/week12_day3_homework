var React = require('react');
var sampleAccounts = require('../sample.json');

var Bank = require('../bank/bank.js');
var AccountBox = require('./AccountBox.jsx');

var BankBox = React.createClass({
  getInitialState: function() {
    return { accounts: sampleAccounts };
  },
  addInterest: function() {
    for (var account of this.state.accounts) {
      account.amount = Math.floor(account.amount * 1.1);
    }
    this.setState({
      accounts: this.state.accounts
    })
  },
  render: function() {

    var bank = new Bank();
    for (var account of this.state.accounts) {
      bank.addAccount(account);
    }

    return(
      <div>
        <h1> React Bank Box </h1>
        <h2> Total: £{ bank.totalCash() } </h2>
        <AccountBox></AccountBox>
        <button type="button" onClick={this.addInterest}>Add interest</button>
      </div>
    )
  }
})

module.exports = BankBox;

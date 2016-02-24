var React = require('react');
var AccountList = require('./AccountList.jsx');

var sampleAccounts = require('../sample.json');
var Bank = require('../bank/bank.js');

var AccountBox = React.createClass({
  getInitialState: function() {
    return { accounts: sampleAccounts };
  },
  render: function() {

    var bank = new Bank();
    for (var account of this.state.accounts) {
      bank.addAccount(account);
    }
    var personalAccounts = bank.filteredAccounts('personal');
    var businessAccounts = bank.filteredAccounts('business');

    return(
      <div>
        <h1> Account Box </h1>
        <h2> Personal accounts total: £{ bank.totalCash('personal') } </h2>
        <AccountList data={personalAccounts}></AccountList>
        <h2> Business accounts total: £{ bank.totalCash('business') } </h2>
        <AccountList data={businessAccounts}></AccountList>
      </div>
    )
  }
})

module.exports = AccountBox;

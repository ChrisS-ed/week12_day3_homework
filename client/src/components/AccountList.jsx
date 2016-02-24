var React = require('react');
var Bank = require('../bank/bank.js');
var Account = require('./Account.jsx')

var AccountList = React.createClass({
  
  render: function() {
    var accountNodes = this.props.data.map(function(account, index) {
      return (
        <Account name={account.name} key={index}>
        {account.owner}: £{account.amount} {account.details}
        </Account>
        );
    });
    return (
      <div>
      Account List
      {accountNodes}
      </div>
      );
  }
})

module.exports = AccountList;
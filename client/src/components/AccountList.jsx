var React = require('react');
var Bank = require('../bank/bank.js');
var Account = require('./Account.jsx')

var AccountList = React.createClass({
  
  render: function() {
    var accountNodes = this.props.data.map(function(account) {
      return (
        <Account name={account.name} key={account.id}>
        £{account.amount}
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
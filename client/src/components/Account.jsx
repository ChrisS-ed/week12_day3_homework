var React = require('react');
var Account = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.account}</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Account;

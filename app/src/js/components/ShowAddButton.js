/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	onToggleForm: function onToggleForm() {

	},

	render: function render() {

		var classString, btnText;

		if (this.props.displayed) {
			classString = 'btn btn-danger btn-block';
			btnText = 'Cancel';
		} else {
			classString = 'btn btn-success btn-block';
			btnText = 'Create New Item';
		}

		return (
			<button className={classString} onClick={this.props.onToggleForm}>{btnText}</button>
		);
	}

});
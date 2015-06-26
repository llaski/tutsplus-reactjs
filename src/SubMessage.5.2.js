/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	propTypes: {
		message: React.PropTypes.string.isRequired
	},

	getDefaultProps: function()
	{
		return {
			message: 'Its good to see you.'
		};
	},

	render: function() {
		var divStyle = {
		  width: '100%',
		  display: 'block',
		  overflow: 'hidden',
		  margin: '10px 0'
		};

		return (
			<div style={divStyle}>
				<span className="pull-left">{this.props.message}</span>
				<button className="pull-right btn btn-danger" onClick={this.handleDelete}>x</button>
			</div>
		);
	},

	handleDelete: function handleDelete(e) {
		this.props.onDelete(this.props.message);
	}

});
/** @jsx React.DOM */

var React = require('react');

var SubMessage = React.createClass({displayName: "SubMessage",

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
			React.createElement("div", {style: divStyle},
				React.createElement("span", {className: "pull-left"}, this.props.message),
				React.createElement("button", {className: "pull-right btn btn-danger", onClick: this.handleDelete}, "x")
			)
		);
	},

	handleDelete: function handleDelete(e) {
		this.props.onDelete(this.props.message);
	}

});
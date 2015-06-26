/** @jsx React.DOM */

var React = require('react');
var SubMessage = require('./SubMessage.5.2');

module.exports = React.createClass({

	getInitialState: function()
	{
		return {
			isVisible: true,
			messages: [
				'I like Turtles',
				'Zombies are coming',
				'My spoon is too big',
				'React is awesome'
			]
		};
	},

	render: function render() {

		var inlineStyles = {
			display: this.state.isVisible ? 'block' : 'none'
		};

		var messages = this.state.messages.map(function(message) {
			return <SubMessage message={message} onDelete={this.deleteMessage} />
		}.bind(this));

		return (
			<div className="container jumbotron" style={inlineStyles}>
				<h2>Hello, World</h2>
				<input ref="newMessage" type="text" />
				<button	className="btn btn-primary" onClick={this.handleAdd}>Add</button>
				{ messages }
			</div>
		);
	},

	handleAdd: function handleAdd(evt) {
		var newMessage = this.refs.newMessage.getDOMNode().value;
		var newMessages = this.state.messages.concat(newMessage);
		this.setState({
			messages: newMessages
		});
		this.refs.newMessage.getDOMNode().value = '';
	},

	deleteMessage: function deleteMessage(message) {
		var newMessages = _.without(this.state.messages, message);
		this.setState({
			messages: newMessages
		});
	}

});
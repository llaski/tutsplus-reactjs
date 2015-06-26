/** @jsx React.DOM */

var MessageBox = React.createClass({displayName: "MessageBox",

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
			return React.createElement(SubMessage, {message: message, onDelete: this.deleteMessage})
		}.bind(this));

		return (
			React.createElement("div", {className: "container jumbotron", style: inlineStyles}, 
				React.createElement("h2", null, "Hello, World"), 
				React.createElement("input", {ref: "newMessage", type: "text"}), 
				React.createElement("button", {	className: "btn btn-primary", onClick: this.handleAdd}, "Add"), 
				 messages 
			)
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
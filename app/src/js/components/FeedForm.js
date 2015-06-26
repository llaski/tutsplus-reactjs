/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	render: function render() {

		var display = this.props.displayed ? 'block' : 'none';
		var styles = {
			display: display
		};

		return (
			<form ref="feedForm" style={styles} id="feedForm" className="container" onSubmit={this.onSubmit}>
				<div className="form-group">
					<input ref="title" type="text" className="form-control" placeholder="Title" />
					<input ref="description" type="text" className="form-control" placeholder="Description" />
					<button type="submit" className="btn btn-primary btn-block">Add</button>
				</div>
			</form>
		);
	},

	onSubmit: function onSubmit(e) {
		e.preventDefault();

		var newItem = {
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			voteCount: 0
		};

		this.refs.feedForm.getDOMNode().reset();

		this.props.onNewItem(newItem);
	}

});
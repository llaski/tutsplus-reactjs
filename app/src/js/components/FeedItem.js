/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

	render: function render() {

		var labelClassName = this.props.voteCount >= 0 ? 'label label-success pull-right' : 'label label-danger pull-right';
		return (
			<li className="list-group-item">
				<span className={labelClassName}>{this.props.voteCount}</span>
				<h4>{this.props.title}</h4>
				<span>{this.props.description}</span>
				<span className="pull-right">
					<button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
					<button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
				</span>
			</li>
		);
	},

	voteUp: function voteUp() {
		var count = parseInt(this.props.voteCount);
		var newCount = count + 1;
		this.vote(newCount);
	},

	voteDown: function voteDown() {
		var count = parseInt(this.props.voteCount);
		var newCount = count - 1;
		this.vote(newCount);
	},

	vote: function vote(count) {

		this.props.onVote({
			key: this.props.itemKey,
			title: this.props.title,
			description: this.props.description,
			voteCount: count
		});
	}

});
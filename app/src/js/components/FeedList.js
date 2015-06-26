/** @jsx React.DOM */

var React = require('react');
var FeedItem = require('./FeedItem');

module.exports = React.createClass({

	render: function render() {

		var feedItems = this.props.items.map(function(item) {
			return <FeedItem itemKey={item.key} title={item.title} description={item.description} voteCount={item.voteCount} onVote={this.props.onVote} />
		}.bind(this));

		return (
			<ul className="list-group container">
				{feedItems}
			</ul>
		);
	}

});
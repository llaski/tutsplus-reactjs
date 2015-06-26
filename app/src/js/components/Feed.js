/** @jsx React.DOM */

var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var FeedForm = require('./FeedForm');
var FeedList = require('./FeedList');
var _ = require('lodash');
var Firebase = require('firebase');

module.exports = React.createClass({

	loadData: function loadData() {
		var ref = new Firebase('https://blistering-fire-1356.firebaseio.com/feed');

		ref.on('value', function(snap) {

			var items = [];
			snap.forEach(function(itemSnap) {
				var item = itemSnap.val();
				item.key = itemSnap.key();
				items.push(item);
			});

			items = _.sortBy(items, function(item) {
				return -item.voteCount;
			});

			this.setState({
				items: items
			});
		}.bind(this));
	},

	componentDidMount: function componentDidMount() {
		this.loadData();
	},

	getInitialState: function getInitialState() {
		return {
			items: [],
			formDisplayed: false
		};
	},

	onToggleForm: function onToggleForm() {
		this.setState({
			formDisplayed: ! this.state.formDisplayed
		});
	},

	onNewItem: function onNewItem(newItem) {
		var ref = new Firebase('https://blistering-fire-1356.firebaseio.com/feed');
		ref.push(newItem)
	},

	onVote: function onVote(item) {
		var ref = new Firebase('https://blistering-fire-1356.firebaseio.com/feed').child(item.key);
		ref.update(item);
	},

	render: function render() {

		return (
			<div>
				<div className="container">
					<ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
				</div>
				<FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />

				<br />
				<br />

				<FeedList items={this.state.items} onVote={this.onVote} />
			</div>
		);
	}

});
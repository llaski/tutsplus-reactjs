/** @jsx React.DOM */

var Dashboard = React.createClass({displayName: "Dashboard",

	loadData: function loadData(url) {
		return $.get('https://gsr-demo.firebaseio-demo.com/' + url + '/.json');
	},

	componentWillMount: function componentWillMount() {
	},

	componentDidMount: function componentDidMount() {
		this.loadData(this.props.url).then(function(data) {
			this.setState({
				metric: data
			});
		}.bind(this));

		$("#tip").tooltip();
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		var lastUrl = this.props.url;

		this.loadData(nextProps.url).then(function(data) {
			this.setState({
				lastRoute: lastUrl,
				metric: data
			});
		}.bind(this));
	},

	shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
		return nextState.metric > 30;
	},

	componentWillUnmount: function componentWillUnmount() {
		$("#tip").tooltip('destroy');
	},

	getInitialState: function getInitialState()
	{
		return {
			metric: 0,
			lastRoute: ''
		};
	},

	render: function render() {
		return (
			React.createElement("div", {className: "jumbotron"}, 
				React.createElement("p", null, this.state.lastRoute), 
				React.createElement("a", {id: "tip", href: "#", "data-toggle": "tooltip", title: "Hover!"}, "Hover over me"), 
				React.createElement("h2", {className: "text-center"}, this.state.metric)
			)
		);
	}

});

var reactComponent = React.render(
	React.createElement(Dashboard, {url: "metric"}),
	document.getElementById('app')
);
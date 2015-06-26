/** @jsx React.DOM */

var Dashboard = React.createClass({

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
			<div className="jumbotron">
				<p>{this.state.lastRoute}</p>
				<a id="tip" href="#" data-toggle="tooltip" title="Hover!">Hover over me</a>
				<h2 className="text-center">{this.state.metric}</h2>
			</div>
		);
	}

});

var reactComponent = React.render(
	<Dashboard url="metric" />,
	document.getElementById('app')
);
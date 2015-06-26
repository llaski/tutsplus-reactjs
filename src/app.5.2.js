/** @jsx React.DOM */

var React = require('react');
var MessageBox = require('./MessageBox.5.2');

var reactComponent = React.render(
	<MessageBox />,
	document.getElementById('app')
);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MoviesList = require('./components/moviesList');
var {AppRegistry} = React;

var trackMe = React.createClass({
	render : function () {
		return (
				<MoviesList/>
		);
	}
});

AppRegistry.registerComponent('trackMe', () => trackMe);
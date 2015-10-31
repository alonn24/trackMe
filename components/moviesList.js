/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MovieRow = require('./movieRow');
var {
		AppRegistry,
		ListView,
		StyleSheet,
		Text,
		View,
		} = React;

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var MoviesList = React.createClass({
	getInitialState : function () {
		return {
			dataSource : new ListView.DataSource({
				rowHasChanged : (row1, row2) => row1 !== row2,
			}),
			loaded : false
		};
	},
	componentDidMount : function () {
		this.fetchData();
	},
	fetchData : function () {
		fetch(REQUEST_URL)
				.then((response) => response.json())
				.then((responseData) => {
					      this.setState({
						      dataSource : this.state.dataSource.cloneWithRows(responseData.movies),
						      loaded : true,
					      });
				      })
				.done();
	},
	render : function () {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		return (
				<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderMovie}
						style={styles.listView}
						/>
		);
	},

	renderLoadingView : function () {
		return (
				<View style={styles.container}>
					<Text>
						Loading movies...
					</Text>
				</View>
		);
	},

	renderMovie : function (movie) {
		return (
				<MovieRow data={movie}></MovieRow>
		);
	}
});

var styles = StyleSheet.create({
	listView : {
		paddingTop : 20,
		backgroundColor : '#F5FCFF'
	}
});

module.exports = MoviesList;
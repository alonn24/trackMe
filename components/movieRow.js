'use strict';

var React = require('react-native');
var {
		AppRegistry,
		Image,
		StyleSheet,
		Text,
		View,
		} = React;

var MovieRow = React.createClass({
	render : function () {
		var movie = this.props.data;
		return (
				<View style={styles.container}>
					<Image
							source={{uri: movie.posters.thumbnail}}
							style={styles.thumbnail}
							/>
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{movie.title}</Text>
						<Text style={styles.year}>{movie.year}</Text>
					</View>
				</View>
		);
	}
});

var styles = StyleSheet.create({
	container : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#F5FCFF'
	},
	rightContainer : {
		flex : 1
	},
	title : {
		fontSize : 20,
		marginBottom : 8,
		textAlign : 'center'
	},
	year : {
		textAlign : 'center'
	},
	thumbnail : {
		width : 53,
		height : 81
	}
});

module.exports = MovieRow;
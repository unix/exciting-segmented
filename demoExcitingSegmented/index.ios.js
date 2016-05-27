/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Segmented from './exciting-segmented'


class demoExcitingSegmented extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			logText: 'callback text',
			logIndex: 'callback index'
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{position: 'absolute', top: 15, left: 0}}>
					<Segmented dataSource={['hello1', 'hello2', 'hello3']}
					           onPress={(index, text) => {this.setState({
					                     logIndex: index, logText: text,
					           })}}
					/>
				</View>


				<Text style={styles.welcome}>
					Exciting-segmented!
				</Text>
				<Text style={styles.instructions}>
					index: {this.state.logIndex}
				</Text>
				<Text style={styles.instructions}>
					text: {this.state.logText}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('demoExcitingSegmented', () => demoExcitingSegmented);

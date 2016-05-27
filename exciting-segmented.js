/**
 * Created by WittBulter on 16/5/26.
 */
import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity, ListView, StyleSheet, TextInput, Animated, Dimensions} from 'react-native'
const {width} = Dimensions.get('window')

export default class segmented extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arr: this.props.dataSource? this.props.dataSource: ['example1', 'example2', 'example3'],
			width: 0,
			left: new Animated.Value(0),
		};
	}

	_touchRow (number){
		const {fn, fontSize, fontColor} = {
			fn: this.props.onPress,
			fontSize: this.props.fontSize? this.props.fontSize: 14,
			fontColor: this.props.fontColor? this.props.fontColor: '#000',
		}
		return new Array(number).fill('').map((v, i)=>{
			return (
				<TouchableOpacity key={this.state.arr + i} style={styles.button}
				                  onPress={() => this._move(i, fn, this.state.arr[i])}
				>
					<Text style={[styles.buttonText, {fontSize: fontSize, color: fontColor}]}
					>
						{this.state.arr[i]}
					</Text>
				</TouchableOpacity>
			)
		})
	}

	_move (newIndex, fn, text){
		fn&& fn(newIndex, text)
		Animated.timing(
			this.state.left,{
				toValue: this.state.width * newIndex
			}
		).start()
	}

	render (){
		const {bg, color, border} = {
			bg: this.props.backgroundColor? this.props.backgroundColor: '#fcfcfc',
			color: this.props.bottomColor? this.props.bottomColor: '#1CB4AD',
			border: this.props.borderColor? this.props.borderColor: '#ccc'
		}
		return (
			<View style={[styles.box, {backgroundColor: bg, borderBottomColor: border}]}>
				<View style={styles.buttonBox}>
					{this._touchRow(this.state.arr.length)}
				</View>
				<View style={styles.lineBox}>
					<Animated.View style={[styles.line, {width: this.state.width},
											{backgroundColor: color},
											{marginLeft: this.state.left}
					]} />
				</View>
			</View>
		)
	}
	componentWillMount() {
		this.setState({
			width: (width - 30) / this.state.arr.length
		})
	}
}

const styles = StyleSheet.create({
	box: {
		borderBottomWidth: 1,
		height: 40,
		paddingLeft: 15,
		paddingRight: 15,
		width: width
	},
	buttonBox: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	button: {
		flex: 1,
		alignItems: 'center',
	},
	buttonText: {
		flex: 1,
	},
	lineBox: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		height: 3,
		width: width,
		right: 0,
		backgroundColor: 'transparent',
		flexDirection: 'row',
		paddingLeft: 15,
		paddingRight: 15,

	},
	line: {
		height: 3,
	}
})
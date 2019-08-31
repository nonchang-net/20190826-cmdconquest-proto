import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Button,
	ViewStyle,
} from 'react-native'

interface IProps{
	style: ViewStyle
	onClicked: (kind:ButtonKind) => void
}

export enum ButtonKind{
	Kind1,
	Kind2,
	Kind3,
}

export default (props:IProps) => {

	return (
		<View style={props.style}>

			<View style={styles.bottomButtonWrapper}>
				<Button
					onPress={() => {
						props.onClicked(ButtonKind.Kind1)
					}}
					title="btn1"
				/>
			</View>

			<View style={styles.bottomButtonWrapper}>
				<Button
					onPress={() => {
						props.onClicked(ButtonKind.Kind2)
					}}
					title="btn2"
				/>
			</View>

			<View style={styles.bottomButtonWrapper}>
				<Button
					onPress={() => {
						props.onClicked(ButtonKind.Kind3)
					}}
					title="btn3"
				/>
			</View>

		</View>)
}


const styles = StyleSheet.create({

	bottomButtonWrapper: {

		// flex:0.8,

		position: 'relative',

		padding: 10,
		width: 80,
		height: 60,
		margin: 5,

		backgroundColor: '#ccc',
		opacity: 0.95,
		borderRadius: 10,
		overflow: 'hidden',

		// alignSelf: 'center',
		// justifyContent: 'center',
	}
})
/**
 * Header.tsx
 * - ゲームの雰囲気を最小限演出するための画面上部の情報領域
 * - フレーバー背景を設定
 * - ゲーム進行上の重要な情報をここに出す？
 * 	 - コマコンでは食料リソースがスタミナに当たるので、ここに出すことになりそう
 */

import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	Image,
	Button,
	ViewStyle,
} from 'react-native'

interface IProps{
	style: ViewStyle
	statusText: string
}

export default (props: IProps) => {
	return (
		<View style={props.style} >
			<Image
				style={styles.headerImage}
				source={require('../assets/backgrounds/32850890c89814227530f4d4b5d053d8.png')}
			/>
			<Text style={styles.headerTextTest}>Command Conquest Proto: ver 2019.0831.1828</Text>
			<Text style={styles.headerTextTest2}>status: {props.statusText}</Text>
		</View>
	)
}

const styles = StyleSheet.create({

	headerImage: {
		//TODO: 自動でcssのcover表示相当にしたい。RNでのやり方を調べる
		// width: 320, 
		height: '100%',
		overflow: 'hidden',
	},

	headerTextTest: {
		position: 'absolute',
		right: 5,
		bottom: 5,
	},

	headerTextTest2: {
		position: 'absolute',
		top: 5,
		left: 5,
	},

})
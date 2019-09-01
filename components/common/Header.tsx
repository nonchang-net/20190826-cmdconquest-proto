/**
 * Header.tsx
 * - ゲームの雰囲気を最小限演出するための画面上部の情報領域
 * - フレーバー背景を設定
 * - ゲーム進行上の重要な情報をここに出す？
 * 	 - コマコンでは食料リソースがスタミナに当たるので、ここに出すことになりそう
 */

import React from 'react';
import {
	View,
	Text,
	Image,
	ViewStyle,
} from 'react-native'
import AppAssets from '../../AppAssets';
import Guage from './Guage';

interface IProps{
	style: ViewStyle
	statusText: string

	level: number
	currentExp: number
	nextExp: number
	currentFood: number
	maxFood: number
}

export default (props: IProps) => {

	function getExpRatio(): string {
		// console.log('getExpRatio(): ',`${props.currentExp / props.nextExp * 100}%`);
		return `${props.currentExp / props.nextExp * 100}%`
	}
	function getFoodRatio(): string {
		// console.log('getFoodRatio(): ',`${props.currentFood / props.maxFood * 100}%`);
		return `${props.currentFood / props.maxFood * 100}%`
	}

	return (
		<View style={props.style} >

			{/* 背景画像 */}
			<Image
				source={AppAssets.background}
				style={{
					width: '100%', 
					height: '100%',
					overflow: 'hidden',
				}}
				resizeMode='cover'
			/>


			{/* ステータス枠 */}
			<View style={{
				position: 'absolute',
				top: 5,
				right: 5,
			}}>

				{/* 透過背景: 枠で直接やるとopacityが子要素に波及するので分ける */}
				<View style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					backgroundColor: '#000',
					opacity: 0.6,
					borderRadius: 5,
					overflow: 'hidden',
				}} />

				<View style={{
					padding: 5
				}}>
					<Text style={{ color: '#fff' }}>Lv: {props.level}</Text>

					<Text style={{ color: '#fff' }}>Exp: {props.currentExp}/{props.nextExp}</Text>
					<Guage width={100} ratio={getExpRatio()} />

					<Text style={{ color: '#fff' }}>food: {props.currentFood}/{props.maxFood}</Text>
					<Guage width={100} ratio={getFoodRatio()} />
				</View>

			</View>


			<Text style={{
				position: 'absolute',
				top: 5,
				left: 5,
			}}>Proto: ver 2019.0831.1828</Text>
			
			<Text style={{
				position: 'absolute',
				right: 5,
				bottom: 5,
			}}>{props.statusText}</Text>
		</View>
	)
}

// const styles = StyleSheet.create({
// })
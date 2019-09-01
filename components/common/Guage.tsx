/**
 * Guage.tsx
 * - ゲームによくあるゲージの表現
 */

import React from 'react';
import {
	View,
} from 'react-native'
import { ColorProperty } from 'csstype';

interface IProps{
	width: number,
	ratio: string, //TODO: 0.0-1.0で渡してstyleの0-100%に変換するようにしたい。というかそうしないと使い物にならないと思う
	guageColor?: ColorProperty
}

export default (props: IProps) => {

	// デフォルトカラー
	// TODO: styleに適用できない。要調査
	// let guageColor = '#0F0'

	// if (!props.guageColor) {
	// 	guageColor = props.guageColor!
	// }

	return (
		<View style={{
			backgroundColor: '#fff',
			borderRadius: 5,
			overflow: 'hidden',
			height: 10,
			width: props.width,
			padding : 1,
		}}>
			<View style={{
				// backgroundColor: props.guageColor, // TODO: 透明になる。なぜか上書きできないっぽい。props変えちゃいけないのかな？
				// backgroundColor: guageColor, // TODO: これも反映されない。透明になる
				backgroundColor: '#0c0',
				borderRadius: 4,
				overflow: 'hidden',
				height: '100%',
				width : props.ratio,
			}} />
		</View>
	)
}
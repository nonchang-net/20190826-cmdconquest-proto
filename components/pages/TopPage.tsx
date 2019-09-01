/**
 * トップページ
 */

import React from 'react';
import {
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native'
import BottomButtons, { ButtonKind } from '../common/BottomButtons';
import ActorMasterList from '../common/ActorMasterList';
import Header from '../common/Header';
import Actors from '../../src/Data/masterData/Actor/Actors';

interface IProps{
	bottomFloaterStyle: ViewStyle
	actors: Actors
	statusText: string
	onClicked: (kind: ButtonKind) => void
	
	level: number
	currentExp: number
	nextExp: number
	currentFood: number
	maxFood: number
}

export default (props: IProps) => {
	return (
		<View style={styles.main}>
			<Header
				style={styles.header}
				statusText={props.statusText}

				level={props.level}
				currentExp={props.currentExp}
				nextExp={props.nextExp}
				currentFood={props.currentFood}
				maxFood={props.maxFood}
			/>
			<ActorMasterList
				style={styles.list}
				actors={props.actors}
			/>
			<BottomButtons
				style={props.bottomFloaterStyle}
				onClicked={props.onClicked} />
		</View>
	)
}

const styles = StyleSheet.create({

	main: {
		flex: 1,
		// flexDirection: 'row',
	},

	header: {
		flex: 1,
	},


	list: {
		flex: 3,
	},

})
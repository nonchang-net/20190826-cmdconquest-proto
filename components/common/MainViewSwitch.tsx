/**
 * MainViewSwitch.tsx
 * - ルータ導入の前に、単純な条件付きレンダーでページ遷移をテスト
 * - TODO: ルータの導入意義を確認、検証
 */
import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native'
import BottomButtons, { ButtonKind } from './BottomButtons';
import Actors from '../../src/Data/masterData/Actor/Actors';
import TopPage from '../pages/TopPage';

interface IProps{
	viewState: ViewState
	actors: Actors
	statusText: string
	onClicked: (kind: ButtonKind) => void
	
	level: number
	currentExp: number
	nextExp: number
	currentFood: number
	maxFood: number
}

export enum ViewState{
	Loading,
	Top,
	TEST1,
	TEST2,
}

export default (props:IProps) => {

	switch (props.viewState) {

		case ViewState.Loading:
			return (
				<View style={styles.nowloading}>
					<Text>nowloading...</Text>
				</View>
			)

		case ViewState.Top:
			return (
				<TopPage
					bottomFloaterStyle={styles.bottomFloater}
					actors={props.actors}
					statusText={props.statusText}
					onClicked={props.onClicked}

					level={props.level}
					currentExp={props.currentExp}
					nextExp={props.nextExp}
					currentFood={props.currentFood}
					maxFood={props.maxFood}
				/>
			)
		

		case ViewState.TEST1:
			return (
				<View style={styles.nowloading}>
					<Text>TEST1</Text>
					<BottomButtons
						style={styles.bottomFloater}
						onClicked={props.onClicked} />
				</View>
			)

		case ViewState.TEST2:
			return (
				<View style={styles.nowloading}>
					<Text>TEST2</Text>
					<BottomButtons
						style={styles.bottomFloater}
						onClicked={props.onClicked} />
				</View>
			)

		default:
			return (
				<View style={styles.nowloading}>
					<Text>error: invalid view state: {props.viewState}</Text>
				</View>
			)
	}

}



const styles = StyleSheet.create({

	nowloading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	// Bottom Buttons
	// - リストビューにかぶせる感じで試す
	bottomFloater: {
		position: "absolute",
		bottom: 5,
		left: 0,
		right: 0,
		// margin : auto,

		flexDirection: 'row',
		flex: 1,

		// alignSelf: 'stretch',
		// alignItems: 'flex-end',
		justifyContent: 'center',

		// backgroundColor: '#eff',
	},

});

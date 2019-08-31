/**
 * MainViewSwitch.tsx
 * - ルータ導入確認の前に、単純な条件付きレンダーでページ繊維をテストしてみる
 * - TODO: ルータ導入検証
 */
import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native'
import BottomButtons, { ButtonKind } from './BottomButtons';
import ActorMasterList from './ActorMasterList';
import Header from './Header';
import Actors from '../src/Data/masterData/Actor/Actors';

interface IProps{
	viewState: ViewState
	actors: Actors
	statusText: string
	onClicked: (kind:ButtonKind) => void
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
				<View style={styles.main}>
					<Header style={styles.header} statusText={props.statusText} />
					<ActorMasterList actors={props.actors} />
					<BottomButtons
						style={styles.bottomButtons}
						onClicked={props.onClicked} />
				</View>
			)
		

		case ViewState.TEST1:
			return (
				<View style={styles.nowloading}>
					<Text>TEST1</Text>
					<BottomButtons
						style={styles.bottomButtons}
						onClicked={props.onClicked} />
				</View>
			)

		case ViewState.TEST2:
			return (
				<View style={styles.nowloading}>
					<Text>TEST2</Text>
					<BottomButtons
						style={styles.bottomButtons}
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

	main: {
		flex: 1,
	},

	nowloading: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	header: {
		flex: 1,
	},


	listContainer: {
		flex: 3,
	},


	// Bottom Buttons
	// - リストビューにかぶせる感じで試す
	bottomButtons: {
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

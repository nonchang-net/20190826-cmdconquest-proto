/**
 * App.tsx
 * - エントリポイント
 * - 責務検討中
 */
import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
} from 'react-native'
import MasterData from './src/data/MasterData'
import Actors from './src/data/masterData/actor/Actors'
import MainViewSwitch, { ViewState } from './components/common/MainViewSwitch'
import { ButtonKind } from './components/common/BottomButtons'

export default () => {

	var initialized: Boolean = false;

	const masterData: MasterData = new MasterData()
	const [statusText, setStatusText] = React.useState('initializing...')
	const [actors, setActors] = React.useState(new Actors)
	const [viewState, setViewState] = React.useState(ViewState.Loading)

	// 初期化
	// TODO: 起動直後、マスターデータなど非同期読み込みを完了させてからローディングを解除したい。
	// TODO: この書き方はreact的じゃない気がする。初期状態をローディング表示にして宣言的に繊維させたい？ 要確認
	async function initializeAsync() {

		await masterData.asyncSetup()

		setStatusText('ACTORマスター一覧')

		// console.log(`initializeAsync(): actors.length = ${masterData.AllActors.length}`)

		setActors(masterData.AllActors)

		setViewState(ViewState.Top)

		// this.actorCells.SetActorTest(this.masterData.AllActors)
	}

	React.useEffect(() => {
		if (initialized) return;
		// 初期化
		initializeAsync();
		initialized = true;
	}, []);

	var onBottomButtonClicked = (kind:ButtonKind) => {
		// console.log(`onBottomButtonClicked(${kind.toString()})`)

		// if (kind === ButtonKind.Kind2) {
		// 	// alert('test')
		// }

		switch (kind) {
			case ButtonKind.Kind1:
				setViewState(ViewState.Top)
				break;

			case ButtonKind.Kind2:
				setViewState(ViewState.TEST1)
				break;

			case ButtonKind.Kind3:
				setViewState(ViewState.TEST2)
				break;
			
			default:
				Error()
		}

	}


	return (

		<SafeAreaView style={styles.container}>
			<MainViewSwitch
				viewState={viewState}
				actors={actors}
				statusText={statusText}
				onClicked={onBottomButtonClicked}
			/>
		</SafeAreaView>
	);

}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});

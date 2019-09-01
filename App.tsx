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
import UserData from './src/data/UserData';

export default () => {

	var initialized: Boolean = false;

	const masterData: MasterData = new MasterData()
	const userData: UserData = new UserData()

	const [statusText, setStatusText] = React.useState('initializing...')
	const [actors, setActors] = React.useState(new Actors)
	const [viewState, setViewState] = React.useState(ViewState.Loading)

	// 仮のユーザデータ
	// - 一旦統一インベントリのことは忘れて、reactのstateでuserDataを表現しておく
	const [exp, setExp] = React.useState(0)
	const [food, setFood] = React.useState(0)
	const [maxFood, setMaxFood] = React.useState(100)

	// Lv100までの経験値マスタを仮作成
	// - Lvが1上がるごとに、次に必要な経験値が10増えていく
	function getMockLevelMaster(): Array<number> {
		let nextExp = 120
		let totalExp = nextExp
		const mockLevelMaster: Array<number> = []
		for (var i = 1; i < 100; i++){
			mockLevelMaster.push(totalExp)
			nextExp += 10
			totalExp += nextExp
		}
		return mockLevelMaster
	}

	const mockLevelMaster = getMockLevelMaster()

	// 経験値と経験値マスターから現在レベルを取得
	function getLevel(): number {
		for (var level = 1; level < 100; level++) {
			// 現在expより比較中レベル経験値が高いなら、そこが現在レベル
			if(mockLevelMaster[level-1] > exp) return level
		}
		// エラー。範囲外
		// TODO: エラーハンドリング考える。maxって表示されるべきかな?
		return -1
	}

	// 次のレベルアップ経験値を取得
	function getNextExp(): number {
		for (var level = 1; level < 100; level++) {
			// 現在expより比較中レベル経験値が高いなら、そのレベル-1が現在レベル
			if(mockLevelMaster[level-1] > exp) return mockLevelMaster[level-1]
		}
		// エラー。範囲外
		// TODO: エラーハンドリング考える。maxって表示されるべきかな?
		return -1
	}


	// 初期化
	// TODO: 起動直後、マスターデータなど非同期読み込みを完了させてからローディングを解除したい。
	// TODO: この書き方はreact的じゃない気がする。初期状態をローディング表示にして宣言的に繊維させたい？ 要確認
	async function initializeAsync() {

		await masterData.asyncSetup()
		await userData.asyncSetup(masterData)

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
				// setViewState(ViewState.Top)
				break;

			case ButtonKind.Kind2:
				// setViewState(ViewState.TEST1)

				// 食料増加テスト
				if (food + 30 > maxFood) {
					setFood(maxFood)
					setStatusText('食料が上限に到達しました')
				} else {
					setFood(food + 30)
					setStatusText('食料を調達しました')
				}
				break;

			case ButtonKind.Kind3:
				// setViewState(ViewState.TEST2)

				// 食料を消費して経験値増加テスト
				if (food < 10) {
					setStatusText('食料が足りません！')
				} else {
					setFood(food - 10)
					setExp(exp + 10)
					setStatusText('食料消費、経験値獲得')
				}
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

				level={getLevel()}
				currentExp={exp}
				nextExp={getNextExp()}
				currentFood={food}
				maxFood={maxFood}
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

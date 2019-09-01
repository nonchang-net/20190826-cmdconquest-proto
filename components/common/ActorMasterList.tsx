/**
 * アクターマスタデータ一覧表示
 * - UNDONE: actorに限らないように、データのリスト表示として汎用化していきたい感じがする
 */
import React from 'react';
import {
	StyleSheet,
	View,
	FlatList,
	Text,
	ViewStyle,
} from 'react-native';
import Actors from '../../src/data/masterData/actor/Actors';

interface IProps {
	style: ViewStyle
	actors: Actors
}

/**
 * ActorMasterリスト表示モード
 * TODO: 検討中の空実装注意
 * - Short: 端的な概要のみ表示するモード。一覧性重視
 * - Long: やや詳細な情報を出す。一覧性を犠牲にして、ゲーム中に頻繁に確認される情報が追記される 
 * - Full: アクターに関する情報を全て表示するモード。ユーザに認識させたい情報に関して、抜け漏れが一切ない状態を想定。一画面に治らない状態でOK
 * - Debug: 開発中に必要な情報を含めて全て表示するモード
 */
export enum ViewKind {
	Short,
	Long,
	Full,
	Debug,
}

export default (props: IProps) => {
	return (
		<View style={props.style}>
			
			<FlatList
				data={props.actors}
				keyExtractor={(_, index) => index.toString()}
				renderItem = {({ item }) =>
					<View style={ styles.listViewItem }>

						<Text style={styles.listViewItemText}>
							{item.id} {item.name}
						</Text>

						<FlatList
							style={styles.skillList}
							data={item.skills}
							keyExtractor={(_, index) => index.toString()}
							renderItem = {({ item }) =>
								<View style={{
									flex: 1,
									paddingLeft: 10,
								}}>

									<Text style={{
										flex: 1,
									}}>
										{item.id} {item.name}
									</Text>

								</View>
							}
						/>
					</View>
				}

				ListHeaderComponent={
					() => <Text>ActorMasterData一覧</Text>
				}

				// フロートさせるフッターボタンと被らないよう、末尾にfooterComponennt追加
				ListFooterComponent={
					() => <View style={{height : 100}} />
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({

	listViewItem: {
		// flexDirection: 'row',
		flex: 1,

		padding: 10,
		margin: 5,
		
		backgroundColor: '#fcf',
		borderRadius: 5,
		// overflow: 'hidden',
	},

	listViewItemText: {
		flex: 1
	},

	skillList: {
		flex: 1
	}

})
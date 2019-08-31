/**
 * ユーザデータクラス
 * - ゲームプレイ状態全体を管理
 * - サーバ保存ゲームの場合は通信結果の保存流用クラスとなる
 * - クライアント保存で済むデータは必要に応じてローカルストレージ保存
 * - アイテムのmasterDataIdを持たせるケースなど、
 * 		ユーザーデータ自体からマスターデータを参照することがよくあるので、
 * 		コンストラクタインジェクションでMasterDataを渡している。
 * 		（なおこのサンプルで実例があるかどうかは不明。というかなさそう）
 */

// import { ReactiveProperty } from '../common/Event';
// import GameStateKind from './GameStateKind';
import MasterData from './MasterData';
import InventoryData from './userData/InventoryData';


export default class UserData extends Array<InventoryData> {

	// public get AllInventories(): InventoryData[] {
	// 	return this.Inventories;
	// }
	// private Inventories: InventoryData[] = [];

	// constructor(master: MasterData) {
	// }

	// public Save() {
	// 	// TODO: ハイスコア保存
	// }

	// private Load() {
	// 	// TODO: ハイスコア読み込み
	// }
}

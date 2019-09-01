/**
 * ユーザデータクラス
 * - ゲームプレイ状態全体を管理
 * - サーバ保存ゲームの場合は通信結果の保存流用クラスとなる
 * - クライアント保存で済むデータは必要に応じてローカルストレージ保存
 * - アイテムのmasterDataIdを持たせるケースなど、
 * 		ユーザーデータ自体からマスターデータを参照することがよくあるので、
 * 		初期化時injectでMasterDataを渡している。
 * 		（なおこのサンプルで実例があるかどうかは不明。というかなさそう）
 */

// import { ReactiveProperty } from '../common/Event';
// import GameStateKind from './GameStateKind';
import MasterData from './MasterData';
import InventoryData, {
	InventoryDataWithQuantity,
	Kind as InventoryKind,
	InventoryDataWithQuantityAndMax,
} from './userData/InventoryData';


export default class UserData extends Array<InventoryData> {

	private master!: MasterData

	private food!: InventoryData
	public get Food(): InventoryData { return this.food }

	// public get AllInventories(): InventoryData[] {
	// 	return this.Inventories;
	// }

	public async asyncSetup(master: MasterData): Promise<UserData> {
		this.master = master

		// TODO: 前回終了時のデータ読み込み: Expoだと何が使えるんだろ？

		// 食料初期化
		this.food = new InventoryDataWithQuantityAndMax(InventoryKind.Food, 0, 100);
		this.push(this.food)

		return this
	}
}

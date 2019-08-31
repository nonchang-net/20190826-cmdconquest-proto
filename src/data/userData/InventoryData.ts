/**
 * 統一インベントリデータクラス
 * - 全てのユーザデータを「InventoryDataのリスト」として表現
 * - DB上、Kind属性で分類される形で正規化を一段階外す構造になる
 * - 主な設計意図
 * 		- UI上、どんなユーザデータも統一的にリスト表示できること
 * 		- ゲーム中ストアの実装を、あらゆるユーザリソースで汎用的に処理できること
 * 			ex: 「コインn枚でxを得る」「経験値nnとメダルz枚でyと交換できる」……など
 * - TypeScript上でどう表現するかは検討中
 */


export enum Kind {
	Undefined,
	Coin,
	PlayerExperience,
}

// 基本情報
export default class InventoryData {
	public kind: Kind = Kind.Undefined
}

// 個数情報を追加でもつInventoryData
export class InventoryDataWithQuantity extends InventoryData {
	public quantity: number = 0
}

// 文字列追加情報を持つInventoryData
export class StringUserData extends InventoryData {
	public stringValue?: string
}

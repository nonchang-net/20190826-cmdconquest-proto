/**
 * 統一インベントリデータクラス
 * - 全てのユーザデータを「InventoryDataのリスト」として表現
 * - DB上、Kind属性で分類される形で正規化を一段階外す構造になる
 * 
 * - 主な設計意図
 * 		- UI上、どんなユーザデータも統一的にリスト表示できること
 * 		- ゲーム中のストアや交換系の実装を、あらゆるユーザリソースで汎用的に処理できる形にする
 * 			ex: 「コインn枚でxを得る」「経験値nnとメダルz枚でyと交換できる」……など
 * 
 * - TypeScript上でどう表現するかは検討中
 *   - とりあえずProof of Conceptに向けて手を動かしてみてるけど、いきなりピンとこない構造になりつつあるw
 */


export enum Kind {
	Undefined,
	Coin,
	PlayerName,
	PlayerExperience,
	Food,
}

// 基本情報: kindのみ
export default class InventoryData {
	private kind: Kind = Kind.Undefined
	public get Kind(): Kind { return this.kind }

	constructor(kind: Kind) {
		this.kind = kind
	}
}

// 個数情報をもつdata
export class InventoryDataWithQuantity extends InventoryData {
	private quantity: number
	public get Quantity(): number { return this.quantity }

	constructor(kind: Kind, quantity: number) {
		super(kind)
		this.quantity = quantity
	}
}

// 個数,最大所持数をもつdata
export class InventoryDataWithQuantityAndMax extends InventoryDataWithQuantity {
	private max: number
	public get Max(): number { return this.max }

	constructor(kind: Kind, quantity: number, max: number) {
		super(kind, quantity)
		this.max = max
	}
}

// 文字列追加情報を持つInventoryData
export class StringUserData extends InventoryData {
	public stringValue?: string
}

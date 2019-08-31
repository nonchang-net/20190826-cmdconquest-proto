import { IPeriodicRule } from './PeriodicRule';
import Utils from '@/Common/Utils';

/**
 * 交換ルール定義
 * - 配列継承
 * - ゲーム中、様々な局面で使われる「交換ルール」を定義
 */
export default class ExchangeRules extends Array<IExchangeRule> {

	public async asyncSetup(): Promise<ExchangeRules> {

		// DEBUG: ランダムに待つ
		await Utils.Sleep(1000 * Math.random())

		// DEBUG: モックデータを返す
		const mock: ExchangeRules = new ExchangeRules()
		mock.push(
			{
				uiKind: UIKind.CoinShop,
				periodicRule: undefined,
			}
		);

		// 自分自身をクリアして配列に設定する
		this.length = 0
		this.concat(mock)
		return this
	}
}

// UI上の分類タイプ
// - Shopで出す交換ルール一覧などを絞り込む用途
export enum UIKind {
	Undefined,
	CoinShop,
}

// 交換ルール インターフェース
export interface IExchangeRule {
	uiKind: UIKind
	periodicRule?: IPeriodicRule
}



/**
 * Actors.ts
 * - ゲーム中のキャラクタ表現
 * - 敵・味方を汎用的に扱う
 */

import Skills from './Skills';
import { Skill } from './Skills';
import Utils from '../../../common/Utils';

export default class Actors extends Array<IActor> {

	public constructor() {
		super()
	}

	public async AsyncSetup(skillMaster: Skills): Promise<Actors> {

		// DEBUG: ランダムに待つ
		// await Utils.Sleep(1000 * Math.random())

		// DEBUG: モックデータを返す
		const mock: Actors = new Actors()
		mock.push(
			new Actor(1, 'アリス', skillMaster, [1, 4]),
			new Actor(2, 'イリス', skillMaster, [2]),
			new Actor(3, 'ウル', skillMaster, [3]),
			new Actor(4, 'エル', skillMaster, [4]),
			new Actor(5, 'オーリス', skillMaster, [3]),
			new Actor(6, 'カレン', skillMaster, [2,3]),
			new Actor(7, 'キラ', skillMaster, [1,3]),
			new Actor(8, 'クリス', skillMaster, [1,2,3]),
			new Actor(9, 'ケイ', skillMaster, [1,2,3,4]),
			new Actor(10,'コリン', skillMaster, [1,2]),
		);

		mock.forEach((data) => { this.push(data) })
		return this
	}
}

/**
 * アクター定義
 */
export interface IActor {
	id: number
	name: string
	// skillIds?: number[]
	skills: Skill[]
}

/**
 * コンストラクタでスキル配列を渡すアクター定義
 */
export class Actor implements IActor {
	public readonly id: number
	public readonly name: string
	public readonly skills: Skill[] = []

	public constructor(
		id: number,
		name: string,
		skillMaster: Skills,
		skillIds: number[]
	) {
		this.id = id
		this.name = name
		skillIds.forEach((skillId) => {
			this.skills.push(skillMaster.dictionary[skillId])
		});
	}
}

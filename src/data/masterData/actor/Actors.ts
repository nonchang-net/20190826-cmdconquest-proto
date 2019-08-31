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
			new Actor(1, 'actor1', skillMaster, [1, 4]),
			new Actor(2, 'acror2', skillMaster, [2]),
			new Actor(3, 'actor3', skillMaster, [3]),
			new Actor(4, 'actor4', skillMaster, [3]),
			new Actor(5, 'actor5', skillMaster, [3]),
			new Actor(6, 'actor6', skillMaster, [3]),
			new Actor(7, 'actor7', skillMaster, [3]),
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

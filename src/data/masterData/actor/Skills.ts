/**
 * スキルデータ
 * - TODO: スキルは複数の「効果クラス」の組み合わせで表現…… → このアイデアは現時点では理想的な形が見えてこないので保留中。スキルの部分を定義するのは良いかもしれない。
 */

import Utils from '../../../common/Utils';

export default class Skills extends Array<ISkillRule> {

	public readonly dictionary: { [id: number]: Skill } = {}

	public constructor() {
		super()
		// console.log('Skills: constructor()  called')
	}

	public async AsyncSetup(): Promise<Skills> {

		// console.log('Skills: asyncSetup()  called')

		// DEBUG: ランダムに待つ
		// await Utils.Sleep(1000 * Math.random())

		// DEBUG: モックデータを返す
		const mock: Skills = new Skills()
		mock.push(
			new BattleSkill(1, '戦闘スキル: A', 100, 10, 10),
			new BattleSkill(2, '戦闘スキル: B', 120, 12, 10),
			new BattleSkill(3, '戦闘スキル: C',  80,  8, 20),
			new ConstructionSkill(4, '建築スキル: A', 1.00),
			new ConstructionSkill(5, '建築スキル: B', 2.00),
		);

		// 検索用辞書を保存
		mock.forEach((skill) => {
			this.dictionary[skill.id] = skill
		})

		// this.concat(mock) // UNDONE: 要調査: これではthis.lengthが0。extends Array<ISkillRule>では期待した結果にならない模様？
		mock.forEach((skill) => { this.push(skill) }) // これは正常。lengthが増える

		// console.log(`Skills: this.length = ${this.length} (mock = ${mock.length})`)

		return this
	}
}

export interface ISkillRule {
	id: number
	name: string
}

export class Skill implements ISkillRule {
	public id: number
	public name: string

	public constructor(
		id: number,
		name: string
	) {
		this.id = id
		this.name = name
	}
}

// 戦闘スキル
export class BattleSkill extends Skill {
	public readonly HitPoint: number
	public readonly AttackPoint: number
	public readonly DeffencePoint: number

	public constructor(
		id: number,
		name: string,
		HitPoint: number,
		AttackPoint: number,
		DeffencePoint: number
	) {
		super(id, name)
		this.HitPoint = HitPoint
		this.AttackPoint = AttackPoint
		this.DeffencePoint = DeffencePoint
	}
}

/** 
 * 建築スキル
 * - 建築タスクの消化に必須となるスキル
 * - このスキル持ちをアサインすると施設expが獲得できるケースがある（常設の首都防衛タスクなど）というイメージ
 */
export class ConstructionSkill extends Skill {
	// TODO:
	public readonly BaseSpeed: number

	public constructor(
		id: number,
		name: string,
		BaseSpeed: number
	) {
		super(id, name)
		this.BaseSpeed = BaseSpeed
	}
}

// 回復スキル？
export class HealSKill extends Skill {
	// TODO:
}

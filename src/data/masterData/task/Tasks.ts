/**
 * タスクマスターデータ
 * - 配列継承。方法があればReaOonlyにしたいところ
 * - NOTE: このクラス名はC#移植の際に困る気がする
 * 		- 「Quest」にしようか検討したものの、本プロトタイプゲームでは冒険とも限らないので検討中
 *
 */

import Range from '../../../common/Range'
import Utils from '../../../common/Utils';

export default class Tasks extends Array<ITaskRule> {

	public constructor() {
		super()
	}

	public async AsyncSetup(): Promise<Tasks> {

		// DEBUG: ランダムに待つ
		await Utils.Sleep(1000 * Math.random())

		const firstTask: ITaskRule = {
			id: 10,
			name: '最初のタスク',
			respawnRule: RespawnRuleKind.First
		}

		// DEBUG: モックデータを返す
		const mock: Tasks = new Tasks()
		mock.push(

			firstTask,

			new TaskRuleWithOtherClear(
				11,
				'最初のタスクが終わった後にやるタスク',
				firstTask.id
			),

			new TaskRuleWithPlayerLevelRange(
				12,
				'ランダムで出てくるタスク',
				RespawnRuleKind.RandomAlways,
				new Range(0, 10)
			)

		);

		mock.forEach((data) => { this.push(data) })
		return this
	}
}

/**
 * タスク1件の定義
 *
 * - タスクの発生条件
 * - タスクの開始要件（消費素材数、受領人数、受領可能キャラクタ条件）
 *
 */

// タスク発生条件enum
// - TODO: このenumで大別し、詳細条件はコンポジションで表現……？（検討中）
export enum RespawnRuleKind {
	Undefined,
	First, // 最初から解放されているタスク
	OtherClearRequired, // 他の特定IDがクリアされた時に解放されるタスク
	RandomAlways, // ランダム、常時登場する可能性がある
}

// 最小のタスク表現
// - リスポーン種別とIDが最低限必要
// - 最初から解放されてる初期タスク「First」タイプの表現に利用
export interface ITaskRule {
	id: number
	name: string
	respawnRule: RespawnRuleKind
}

/**
 * 他のタスクをクリアしたら解放されるタスク
 */
export class TaskRuleWithOtherClear implements ITaskRule {

	public readonly id: number
	public readonly name: string

	// リスポーン種別: OtherClearRequired固定
	public readonly respawnRule: RespawnRuleKind =
		RespawnRuleKind.OtherClearRequired

	public readonly otherTaskId: number

	// コンストラクタ
	public constructor(
		id: number,
		name: string,
		otherTaskId: number
	) {
		this.id = id
		this.name = name
		this.otherTaskId = otherTaskId
	}
}

/**
 * 特定のプレイヤーレベル範囲内でランダム生成されるタスク
 */
export class TaskRuleWithPlayerLevelRange implements ITaskRule {

	public readonly id: number
	public readonly name: string

	// リスポーン種別
	public readonly respawnRule: RespawnRuleKind

	// ランダムリスポーンの際のレベル条件
	public readonly levelRange: Range

	// コンストラクタ
	public constructor(
		id: number,
		name: string,
		respawnRule: RespawnRuleKind,
		levelRange: Range
	) {
		this.id = id
		this.name = name
		this.respawnRule = respawnRule
		this.levelRange = levelRange
	}
}


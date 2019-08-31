/**
 * タスク要件定義
 * - 受領可能要件、受領時の消費条件は、要件レコードの配列で表現される
 */

// import Range from '../../../common/Range'

export default class Requirements extends Array<IRequirement> {

	// public async asyncSetup(): Promise<Requirements> {

		// // DEBUG: ランダムに待つ
		// await Utils.Sleep(1000 * Math.random())

	// 	const firstTask: ITaskRule = {
	// 		id: 10,
	// 		respawnRule: RespawnRuleKind.First
	// 	}

	// 	// DEBUG: モックデータを返す
	// 	const mock: Tasks = new Tasks
	// 	mock.push(

	// 		firstTask,

	// 		new TaskRuleWithOtherClear(
	// 			11,
	// 			firstTask.id
	// 		),

	// 		new TaskRuleWithPlayerLevelRange(
	// 			12,
	// 			RespawnRuleKind.RandomAlways,
	// 			new Range(0, 10)
	// 		)

	// 	);
		// // 自分自身をクリアして配列に設定
		// this.length = 0
		// this.concat(mock)
		// return this
	// }
}

export enum ConsumeRequirementKind {
	Undefined,
	ConsumeCoin, // コインを消費する要件
	ConsumeFoods, // 食料を消費する要件
}

export enum SkillRequirementKind {
	Undefined,
	ConstructionSkillRequired,
	BattleSkillRequired,
}

export interface IRequirement {
	consumeRule?: ConsumeRequirementKind
	skillRule?: SkillRequirementKind
}

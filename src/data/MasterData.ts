import Tasks from './masterData/task/Tasks';
import Utils from '../common/Utils';
import Actors from './masterData/actor/Actors';
import Skills from './masterData/actor/Skills';

/**
 * MasterData.ts
 * - マスターデータクラス
 * - ゲーム中変動しないデータ
 * - 運営が更新かける可能性はある。変更があった場合はタイトルに戻して更新させるようなイメージ
 */

export default class MasterData {

	// private lastUpdate: number = -1;

	private actors!: Actors // = new Actors();
	public get AllActors(): Actors { return this.actors }
	private skills!: Skills
	private tasks!: Tasks // = new Tasks();

	// monsters: Monsters
	// characters: Characters

	// public constructor() {
	// 	console.log('MData: constructor() called.', this.skills.AsyncSetup)
	// }

	public async asyncSetup(): Promise<MasterData> {

		// console.log('MData: asyncSetup()  called')

		// TODO: S3からローカルストレージにlastUpdateを保存・読み込み・差分確認する手順を検討中
		// - また、マスターデータクラス系の更新処理は共通処理なので継承関係にしていいと思う
		// if (this.lastUpdate < lastUpdate) {
		// 	this.monsters = await new Monsters().asyncSetup()
		// 	this.characters = await new Characters().asyncSetup()
		// 	// console.log("check:", this.monsters, this.characters)
		// }

		// マスタ初期化: 並列実行
		// - 依存関係があるものは個別に括る
		// await Promise.all([
		// 	(async () => {
		// 		this.skills = await this.skills.asyncSetup()
		// 		this.actors = await this.actors.asyncSetup(this.skills)
		// 		console.log('MD: Promise.all 1 finished')
		// 	})(),
		// 	(async () => {
		// 		this.tasks = await this.tasks.asyncSetup()
		// 		console.log('MD: Promise.all 2 finished')
		// 	})()
		// ])

		// DEBUG: 読み込み遅延エミュレーション
		// await Utils.Sleep(1000)

		this.skills = await new Skills().AsyncSetup() 
			// UNDONE: 要調査: 上のAsyncSetupはnewした直後にしか呼べない。
			// - `this.skills = new Skills(); console.log(this.skills.AsyncSetup)` がundefinedになる。。
			// - `extends Array<ISkillRule>` の弊害だろうか？
		// console.log(`this.skills.length = ${this.skills.length}`)

		this.actors = await new Actors().AsyncSetup(this.skills)
		this.tasks = await new Tasks().AsyncSetup()


		// console.log('MD: asyncSetup() 2')

		// this.tasks.forEach((task) => {
		// 	console.log(`tasks: dump ${task}`);
		// })

		// this.lastUpdate = -1 // TODO: サーバから取得したバージョン情報を保存する
		// this.Save()

		// console.log('MD: asyncSetup() finished')
		return this
	}

	// TODO: ローカルストレージにバージョン保存
	// private Save() {
	// }
}

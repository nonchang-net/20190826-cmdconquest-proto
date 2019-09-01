/**
 * AppAssets.ts
 * - アプリ各所にrequireが散らばると見通しが悪いので、ここにまとめる
 * - ファイル階層整理の際に壊れるのを防ぐため、プロジェクトルートにまとめておく
 * - TODO: requireだけじゃなく遅延読み込み系も管理させたい気持ち
 * - HOLD: この書き方だとbackgroundがAnyになる。型指定の方法があれば適用する
 */

export default {
	background: require('./assets/backgrounds/32850890c89814227530f4d4b5d053d8.png'),
}
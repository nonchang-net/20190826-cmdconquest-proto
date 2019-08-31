/**
 * 数値範囲を示すクラス
 * - TODO: TypeScript標準でこういうのないのかな
 * 		- というか標準でRangeがあるようだけど詳細不明。node処理系？
 */

export default class Range implements IRange {
	public start: number = 0
	public end: number = 0
	constructor(start: number, end: number) {
		this.start = start
		this.end = end
	}

	public get Distance(): number {
		return this.end - this.start
	}

	// 引数がRangeの範囲内かどうか（同値true）
	public Contains(target: number): boolean {
		return this.end <= target && this.start >= target
	}
}

export interface IRange {
	start: number
	end: number
}

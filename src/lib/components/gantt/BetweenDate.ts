export class BetweenDate {
	start: Date;
	end: Date;

	constructor(start: Date, end: Date) {
		this.start = start;
		this.end = end;
		if (this.end <= this.start) {
			this.end = new Date(this.start.getDate() + 1);
		}
	}

	/**
	 * targetを含む月の1日から末日の範囲を返す
	 * @param target
	 * @returns
	 */
	static MakeMonth(target: Date): BetweenDate {
		return new BetweenDate(
			new Date(target.getFullYear(), target.getMonth(), 1),
			new Date(target.getFullYear(), target.getMonth() + 1, 0)
		);
	}

	static MakeMonths(between: BetweenDate): BetweenDate[] {
		// console.log(`MakeMonths:start: ${between.start}`);
		// console.log(`MakeMonths:end: ${between.end}`);
		let ret: BetweenDate[] = [];
		if (
			between.start.getFullYear() === between.end.getFullYear() &&
			between.start.getMonth() === between.end.getMonth()
		) {
			ret.push(new BetweenDate(between.start, between.end));
			return ret;
		}
		let i = new Date(between.start);
		while (i <= between.end) {
			let tmpEnd = new Date(i.getFullYear(), i.getMonth() + 1, 0);
			if (tmpEnd > between.end) {
				tmpEnd = new Date(between.end);
			}
			// console.log(`MakeMonths:tmpEnd: ${tmpEnd}`);
			ret.push(new BetweenDate(new Date(i), tmpEnd));
			i = new Date(i.getFullYear(), i.getMonth() + 1, 1);
			// console.log(`MakeMonths:i: ${i}`);
		}
		return ret;
	}
}

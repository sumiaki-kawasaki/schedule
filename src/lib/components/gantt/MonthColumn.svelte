<script>
	import DayColumn from './DayColumn.svelte';

	/** @type {import('./BetweenDate').BetweenDate} */
	export let between;

	/** @type {Date[]} */
	const days = MakeDays();

	/**
	 * @return {Date[]}
	 */
	function MakeDays() {
		// console.log(`MakeDays:start: ${between.start}`);
		// console.log(`MakeDays:end: ${between.end}`);
		let ret = [];
		for (let i = new Date(between.start); i <= between.end; i.setDate(i.getDate() + 1)) {
			ret.push(new Date(i));
		}
		return ret;
	}
</script>

<div>
	<div class="border flex justify-center items-center h-6">
		<p>{between.start.getFullYear()}年{between.start.getMonth() + 1}月</p>
	</div>
	<div class="flex">
		{#each days as date}
			<DayColumn {date} />
		{/each}
	</div>
</div>

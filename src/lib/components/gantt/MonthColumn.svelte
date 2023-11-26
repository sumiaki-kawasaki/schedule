<script>
	import DayColumn from './DayColumn.svelte';

	/** @type {Date} */
	export let start;
	/** @type {Date} */
	export let end;
	/** @type {Date[]} */
	const days = MakeDays();

	/**
	 * @return {Date[]}
	 */
	function MakeDays() {
		let ret = [];
		const workDate = new Date(start);
		for (let i = 1; i < 32; ++i) {
			const pushDay = new Date(workDate);
			ret.push(pushDay);
			if (workDate >= end) {
				break;
			}
			workDate.setDate(workDate.getDate() + 1);
		}
		return ret;
	}
</script>

<div>
	<div class="border flex justify-center items-center h-6">
		<p>{start.getFullYear()}年{start.getMonth() + 1}月</p>
	</div>
	<div class="flex">
		{#each days as date}
			<DayColumn {date} />
		{/each}
	</div>
</div>

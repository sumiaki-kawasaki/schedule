<script lang="ts">
	import DayColumn from './DayColumn.svelte';
	export let start: Date;
	export let end: Date;
	const days: Date[] = MakeDays();

	function MakeDays(): Date[] {
		let ret: Date[] = [];
		const workDate = new Date(start);
		while (1) {
			const pushDay = new Date(workDate);
			ret.push(pushDay);
			if (workDate === end) {
				break;
			}
			workDate.setDate(workDate.getDate() + 1);
		}
		return ret;
	}
</script>

<div>
	<div class="w-full">
		{start.getFullYear()}年{start.getMonth() + 1}月
	</div>
	<div class="flex">
		{#each days as date}
			<DayColumn {date} />
		{/each}
	</div>
</div>

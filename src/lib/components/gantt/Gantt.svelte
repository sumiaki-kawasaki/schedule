<script>
	import { task } from '$lib/repositories/task';
	import { BetweenDate } from './BetweenDate';
	import MonthColumn from './MonthColumn.svelte';
	import TaskColumn from './TaskColumn.svelte';

	const today = new Date();
	// const beginDate = new Date(today);
	const beginDate = new Date(today.getFullYear(), today.getMonth(), 1);
	const endDate = new Date(beginDate);
	endDate.setDate(beginDate.getDate() + 90);
	// const between = BetweenDate.MakeMonth(today);
	// const between = BetweenDate.MakeMonth(new Date(2024, 1, 1));
	const between = new BetweenDate(beginDate, endDate);
	// console.log(`Gantt:beginDate: ${beginDate}`);
	// console.log(`Gantt:endDate: ${endDate}`);

	// /** @type {BetweenDate[]} */
	const months = BetweenDate.MakeMonths(between);
</script>

<div class="w-full">
	<div class="flex">
		<div class="">
			<div class="flex w-96 h-12">
				<div class="border flex justify-center items-center w-4/6 h-full">
					<p>題名</p>
				</div>
				<div class="border flex justify-center items-center w-2/6 h-full">
					<p>担当者</p>
				</div>
			</div>
			<div class="w-full">
				{#each $task.tasks as item}
					<TaskColumn {item} />
				{/each}
				<!-- スクロールバーの分 -->
				<div class="h-4"></div> 
			</div>
		</div>
		<div class="w-full overflow-auto">
			<div class="flex">
				{#each months as between}
					<MonthColumn {between} />
				{/each}
				<!-- スクロールバーの分 -->
				<div class="w-4"></div> 
			</div>
			<div></div>
		</div>
		<div class="absolute left-96 w-2 h-full cursor-col-resize"></div>
	</div>
</div>

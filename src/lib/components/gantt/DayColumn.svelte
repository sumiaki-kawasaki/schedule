<script>
	import * as holyday_jp from '@holiday-jp/holiday_jp';

	/** @type {Date} */
	export let date;
	const isSaturday = date.getDay() === 6;
	const isHolyday = date.getDay() === 0 || holyday_jp.isHoliday(date);
</script>

<div
	class="border flex justify-center items-center w-8 h-6"
	class:saturday={isSaturday}
	class:holyday={isHolyday}
>
	<p>{date.getDate()}</p>
</div>

<style>
	.holyday {
		background-color: lightpink;
		color: darkred;
	}
	.saturday {
		background-color: lightskyblue;
		color: darkblue;
	}
</style>

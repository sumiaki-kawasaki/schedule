import { writable } from 'svelte/store';
import { type Task, TaskUnit } from './types';
export * from './types';

const dummyTask = {
	tasks: [
		{
			id: '1',
			name: 'MAY01：ステップアップ予告',
			estimatedValues: []
		},
		{
			id: '2',
			name: 'MAY02：会話予告',
			estimatedValues: []
		},
		{
			id: '3',
			name: 'MAY03：ストーリー予告',
			estimatedValues: []
		},
		{
			id: '4',
			name: 'MAY04：次回予告',
			estimatedValues: []
		},
		{
			id: '5',
			name: 'MAY05：チュートリアル予告',
			estimatedValues: []
		},
		{
			id: '6',
			name: 'SBY01：先読み保留変化予告',
			estimatedValues: []
		},
		{
			id: '7',
			name: 'SBY02：チャンス目予告',
			estimatedValues: []
		}
	],
	unit: TaskUnit.Day
} as Task;

export const task = writable<Task>(dummyTask);

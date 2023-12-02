export interface Task {
	tasks: TaskItem[];
	unit: TaskUnit;
}

/**
 * タスク情報
 */
export interface TaskItem {
	id: string;
	name: string;
	startDate?: Date;
	endDate?: Date;
	estimatedValues: EstimatedValueItem[];
}

/**
 * 配置工数
 */
export interface EstimatedValueItem {
	value: number;
	date: Date;
}

export enum TaskUnit {
	Day,
	Week,
	Month
}

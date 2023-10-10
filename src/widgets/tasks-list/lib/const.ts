import { TaskStatusType } from '../../../entities/task';

const statuses: TaskStatusType[] = [
  'queue',
  'development',
  'done'
];
export const TASK_STATUSES: Set<TaskStatusType> = new Set(statuses);

import { TaskType } from '../../../../entities/task';

export type TaskForm = Pick<
  TaskType,
  'name' | 'description' | 'attached' | 'subtasks'
>

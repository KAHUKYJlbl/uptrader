export type SubtaskStatusType = 'queue' | 'done';

export type TaskStatusType = SubtaskStatusType | 'development';

export type SubtaskType = {
  id: string;
  name: string;
  description: string;
  status: SubtaskStatusType;
};

export type TaskType = {
  id: string;
  projectId: string;
  name: string;
  description: string;
  dateStart: Date | null;
  dateEnd: Date | null;
  dutyTime: number | null;
  priority: number;
  attached: string[];
  status: TaskStatusType;
  subtasks: SubtaskType[];
};

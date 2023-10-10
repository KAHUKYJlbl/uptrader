import { TaskType } from '../../entities/task/lib/task-type';

export const TASKS: TaskType[] = [
  {
    id: '1-1',
    projectId: '1',
    name: 'task-1-1',
    description: 'description 1-1',
    dateStart: null,
    dateEnd: null,
    dutyTime: null,
    priority: 0,
    attached: [],
    status: 'queue',
    subtasks: [
      {
        id: '1-1-1',
        name: 'subtask-1-1-1',
        description: 'description 1-1-1',
        status: 'queue',
      }
    ],
  },
  {
    id: '1-2',
    projectId: '1',
    name: 'task-1-2',
    description: 'description 1-2',
    dateStart: null,
    dateEnd: null,
    dutyTime: null,
    priority: 0,
    attached: [],
    status: 'development',
    subtasks: [
      {
        id: '1-2-1',
        name: 'subtask-1-2-1',
        description: 'description 1-2-1',
        status: 'queue',
      },
      {
        id: '1-2-2',
        name: 'subtask-1-2-2',
        description: 'description 1-2-2',
        status: 'queue',
      },
    ],
  },
  {
    id: '1-3',
    projectId: '1',
    name: 'task-1-3',
    description: 'description 1-3',
    dateStart: null,
    dateEnd: null,
    dutyTime: null,
    priority: 0,
    attached: [],
    status: 'queue',
    subtasks: [
      {
        id: '1-3-1',
        name: 'subtask-1-3-1',
        description: 'description 1-3-1',
        status: 'queue',
      },
      {
        id: '1-3-2',
        name: 'subtask-1-3-2',
        description: 'description 1-3-2',
        status: 'queue',
      },
      {
        id: '1-3-3',
        name: 'subtask-1-3-3',
        description: 'description 1-3-3',
        status: 'done',
      },
    ],
  },
];

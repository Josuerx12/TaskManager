export interface task {
  _id: string;
  task: string;
  done: boolean;
  doing: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface editTask {
  task: string;
  done: boolean;
  doing: boolean;
}

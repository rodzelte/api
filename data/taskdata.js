let task = [
  {
    id: 1,
    title: "task 1",
    completed: false,
  },
  {
    id: 2,
    title: "task 2",
    completed: false,
  },
  {
    id: 3,
    title: "task 3",
    completed: false,
  },
];

export const generateId = () => {
  return task.length > 0 ? task[task.length - 1].id + 1 : 1;
};

export const findTask = (id) => {
  return task.find((item) => item.id === id);
};

export const addTask = (title) => {
  const newTask = {
    id: generateId(),
    title,
    completed: false,
  };
  task.push(newTask);
};

export { task };

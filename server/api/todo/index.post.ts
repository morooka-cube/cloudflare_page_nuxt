export default defineEventHandler(async (event) => {
  const todo = await readBody<{ name: string }>(event);

  const todoList = await getTodoList(event.context);
  todoList.push(todo.name);
  
  await putTodoList(event.context, todoList);
});

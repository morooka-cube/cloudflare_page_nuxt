export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id ?? '0')

  const todoList = await getTodoList(event.context);
  todoList.splice(id, 1);
  
  await putTodoList(event.context, todoList);
});

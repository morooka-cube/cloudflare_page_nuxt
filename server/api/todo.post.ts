export default defineEventHandler(async (event) => {
  const todo = await readBody<{ name: string }>(event);

  const todoList = await $fetch('/api/todo');
  todoList.push(todo.name);

  const kv = event.context.cloudflare.env.NUXT_TODO;
  await kv.put('todoList', JSON.stringify(todoList));
});

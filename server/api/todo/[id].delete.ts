export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id ?? '0')

  const todoList = await $fetch('/api/todo');
  todoList.splice(id, 1);

  const kv = event.context.cloudflare.env.NUXT_TODO;
  await kv.put('todoList', JSON.stringify(todoList));
});

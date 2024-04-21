export default defineEventHandler(async (event) => {
  const kv = event.context.cloudflare.env.NUXT_TODO;
  const todoList = await kv.get<string[]>('todoList', 'json');

  return todoList ?? [];
});

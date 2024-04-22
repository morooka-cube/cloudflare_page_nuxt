import type { H3EventContext } from 'h3';

export function getKv(context: H3EventContext) {
  return context.cloudflare.env.NUXT_TODO;
}

export async function getTodoList(context: H3EventContext) {
  const kv = getKv(context);
  const todoList = await kv.get<string[]>('todoList', 'json');

  return todoList ?? [];
}

export async function putTodoList(context: H3EventContext, todoList: string[]) {
  const kv = getKv(context);
  await kv.put('todoList', JSON.stringify(todoList));
}

export default defineEventHandler(async (event) => {
  return await getTodoList(event.context);
});

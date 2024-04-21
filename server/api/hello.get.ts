export default defineEventHandler(({ context }) => {
  return { cf: context.cf }
});

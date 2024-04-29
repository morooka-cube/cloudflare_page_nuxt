export default defineEventHandler(async () => {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      const time = new Date().toISOString();
      console.log('API: /api/time', time)
      resolve(time);
    }, 500)
  });
});

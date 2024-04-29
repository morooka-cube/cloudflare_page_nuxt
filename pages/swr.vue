<script setup lang="ts">
const { data: serverTime, refresh: serverRefresh } = await useFetch('/api/time', {
  key: 'server_time',
  onResponse({ response }) {
    console.log('server_time', response._data);
  }
});

const { data: clientTime, refresh: clientRefresh } = await useAsyncData(
  'clinent_time',
  async () => {
    const time = new Date().toISOString();
    console.log('client_time', time);
    return time;
  },
  {
    server: false
  }
);

const refreshAll = async () => Promise.all([serverRefresh(), clientRefresh()]);
</script>

<template>
  <div>
    <p>Server time: {{ serverTime }}</p>
    <p>Client time: {{ clientTime }}</p>
    <div>
      <button @click="refreshAll">Refresh</button>
    </div>
    <NuxtLink to="/">トップページに戻る</NuxtLink>
  </div>
</template>

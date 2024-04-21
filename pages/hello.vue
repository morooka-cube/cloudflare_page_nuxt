<script setup lang="ts">
const route = useRoute()

const{ data } = useFetch('/api/hello')
</script>

<template>
  <div>
    <h1>hello</h1>
    <pre>{{ data }}</pre>
    <NuxtLink to="/">トップページに戻る</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: asyncDate } = useAsyncData(() => {
  const date = new Date
  console.log(date.toISOString())
  return date
})
</script>

<template>
  <div>
    <h1>id: {{  route.params.id }}</h1>
    <p>id: {{  route.params.id }}</p>
    <p>date: {{ asyncDate.toISOString() }}</p>
    <NuxtLink to="/">トップページに戻る</NuxtLink>
  </div>
</template>

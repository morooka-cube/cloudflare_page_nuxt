<script setup lang="ts">
const route = useRoute()

const ids = ['hello', 'todo', 'redirect']
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <ul>
      <li v-for="id in ids">
        <NuxtLink :to="id">{{ id }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

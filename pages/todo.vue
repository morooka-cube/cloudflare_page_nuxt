<script setup lang="ts">
const { data, refresh } = await useFetch('/api/todo')
const newItem = ref('')

const posting = ref(false)
const postable = computed(() => !posting.value && Boolean(newItem.value))

const addTodo = async () => {
  if(!postable.value) return

  posting.value = true

  await $fetch('/api/todo', {
    method: 'post',
    body: {
      name: newItem.value
    }
  })

  await refresh()

  newItem.value = ''
  posting.value = false
}

const deleteTodo = async (id: number) => {
  if(posting.value) return

  posting.value = true

  await $fetch(`/api/todo/${id}`, {
    method: 'delete'
  })

  await refresh()

  posting.value = false
}
</script>

<template>
  <div>
    <h1>Todo</h1>
    <ul>
      <li v-for="(item, index) in data">
        {{ item }} <button @click="deleteTodo(index)">削除</button>
      </li>
      <li>
        <form>
          <input type="text" v-model="newItem" />
          <input type="submit" value="追加" @click="addTodo" :disabled="!postable">
        </form>
      </li>
    </ul>
    <NuxtLink to="/">トップページに戻る</NuxtLink>
  </div>
</template>

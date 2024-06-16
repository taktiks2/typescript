<script setup lang="ts">
import { ref, type Ref, computed } from 'vue'

interface Todo {
  id: number
  text: string
  done: boolean
}

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos: Ref<Todo[]> = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn CSS', done: true },
  { id: id++, text: 'Learn JavaScript', done: false }
])

// NOTE: ReactのuseMemoみたいなことか？
const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo: Todo) {
  // NOTE: オブジェクトの参照が同じかどうかを比較
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <!-- NOTE: クラスを条件によって付与する -->
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

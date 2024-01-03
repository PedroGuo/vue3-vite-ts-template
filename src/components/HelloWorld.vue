<script setup lang="ts">
import { debounce } from 'lodash-es'
import { ref } from 'vue'

defineOptions({
  name: 'HelloWorld',
})

defineProps<{ msg: string }>()

const count = ref(0)


const debounceCount = debounce(() => count.value++, 300)
</script>

<template>
  <h1 class="text-3xl font-bold">{{ msg }}</h1>
  <div class="card">
    <p class="m-2">debounceCount: </p>
    <button type="button" @click="count++"
      class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
      count is {{ count }}
    </button>
    <p class="m-2">debounceCount: </p>
    <button type="button" @click="debounceCount"
      class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">count
      is {{ count }}</button>
  </div>
</template>



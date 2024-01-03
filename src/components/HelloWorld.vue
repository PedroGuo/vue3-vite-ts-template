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
  <h1>{{ msg }}</h1>

  <div class="card">
    <span>debounceCount: </span>
    <br/>
    <button type="button" @click="count++">count is {{ count }}</button>
    <br/>
    <span>debounceCount: </span>
    <br/>
    <button type="button" @click="debounceCount">count is {{ count }}</button>
  </div>
</template>


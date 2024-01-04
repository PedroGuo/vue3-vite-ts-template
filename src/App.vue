<script setup lang="ts">
  defineOptions({ name: 'App' });
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <div class="app-container">
          <component :is="Component" />
        </div>
      </Transition>
    </template>
  </RouterView>
</template>

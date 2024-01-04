<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <div class="flex justify-center items-center p-2 flex-col">
    <div>
      <img class="h-[300px]" src="/logo.svg" alt="logo" />
    </div>
    <RouterLink to="/demo?msg=hello">/demo</RouterLink>
    <HelloWorld msg="Vite + Vue + TypeScript" />
  </div>
</template>

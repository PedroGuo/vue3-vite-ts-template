<template>
  <div class="flex justify-center">
    <div>I'm demo. route query is : {{ msg }}</div>
    <RouterLink to="/">toHome</RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  defineOptions({
    name: 'Demo',
  });
  const route = useRoute();

  const msg = computed(() => {
    return route.query.msg as string;
  });
</script>
<style scoped lang="less"></style>

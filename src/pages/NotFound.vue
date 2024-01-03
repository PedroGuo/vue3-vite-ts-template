<template>
  <div class="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
    <div
      class="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex"
    >
      <div class="flex-1 max-w-lg">
        <img class="w-full" src="/404.png" />
      </div>
      <div class="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
        <h3 class="text-indigo-600 font-semibold"> 404 Error </h3>
        <p class="text-gray-800 text-4xl font-semibold sm:text-5xl"> 未找到页面 </p>
        <p class="text-gray-600"> 对不起，您要找的页面无法找到或已被删除。 </p>
        <a
          href="javascript:void(0)"
          @click="goBack"
          class="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
        >
          返回上一页
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  defineOptions({ name: 'NotFound' });
  const router = useRouter();

  function goBack() {
    router.back();
  }
</script>

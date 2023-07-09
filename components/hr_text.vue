<template>
  <div class="flex items-center justify-center w-full my-12">
    <hr class="w-10/12 h-px bg-gray-200 border-0">
    <span class="text-2xl absolute px-4 text-gray-900 bg-white">{{
      props.text
    }}</span>
  </div>
</template>
<script setup>
const props = defineProps({ text: { type: String, required: true } });
</script>

<template>
  <div class="flex flex-wrap flex-col items-center justify-start m-8 w-36">
    <div
      class="border rounded-full p-12 w-0 h-0 flex items-center justify-center border-gray-400"
    >
      <div class="text-2xl text-red-600">{{ count }}+</div>
    </div>
    <div class="text-xl text-center">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  count: { type: Number, required: true },
  text: { type: String, required: true },
});
</script>

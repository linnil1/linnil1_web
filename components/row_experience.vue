<template>
  <div class="flex flex-wrap items-center justify-between w-full">
    <div class="flex flex-col items-start">
      <div>{{ props.title }}</div>
      <div>{{ props.date }}</div>
    </div>
    <a v-if="props.type === 'c4lab'" href="https://c4lab.bime.ntu.edu.tw">
      <img class="w-36" src="~/assets/c4Lab.png" />
    </a>
    <a
      v-if="props.type === 'toolmen'"
      href="https://www.mlmvlab.bime.ntu.edu.tw"
    >
      <img class="w-36" src="~/assets/toolmen.png" />
    </a>
    <a v-if="props.type === 'pixnet'" href="https://pixnet.net">
      <img class="w-36" src="~/assets/pixnet.png" />
    </a>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  type: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

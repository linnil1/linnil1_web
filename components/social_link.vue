<template>
  <a
    class="flex items-center justify-center border-stone-400 border rounded-lg w-24 p-2"
    :href="props.url"
  >
    <font-awesome-icon
      class="mr-2"
      :icon="['fab', props.brand]"
    />
    <div>{{ props.name }}</div>
  </a>
</template>

<script setup>
const props = defineProps({
  url: { type: String, required: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
});
</script>

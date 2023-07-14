<template>
  <div class="flex flex-col flex-wrap m-4 my-16">
    <div class="flex items-center text-2xl">
      <font-awesome-icon class="mr-2" icon="fa-solid fa-list" />
      <div>{{ props.title }}</div>
    </div>
    <div class="flex flex-row items-center justify-center mb-4">
      <div class="flex flex-col items-center justify-center mx-8 my-4">
        <div class="text-2xl text-red-600">
          {{ props.links.repo.length }}
        </div>
        <div class="text-xl">
          {{ $t("repo") }}
        </div>
      </div>
      <div class="flex flex-col items-center justify-center mx-8 my-4">
        <div class="text-2xl text-red-600">
          {{ props.links.article.length }}
        </div>
        <div class="text-xl">
          {{ $t("articles") }}
        </div>
      </div>
    </div>
    <div class="ml-4">
      <slot />
    </div>
    <div>
      <div class="flex flex-wrap m-2 ml-4 items-center">
        <div class="mr-4">{{ $t("skills") }}:</div>
        <tech-stack
          v-for="brand in links.skill.Advanced"
          :key="brand"
          :brand="brand"
          level="Advanced"
        />
        <tech-stack
          v-for="brand in links.skill.Intermediate"
          :key="brand"
          :brand="brand"
          level="Intermediate"
        />
        <tech-stack
          v-for="brand in links.skill.Familiar"
          :key="brand"
          :brand="brand"
          level="Familiar"
        />
      </div>
    </div>
    <div
      class="ml-4 hover:cursor-pointer text-xs underline"
      @click="toggleShow"
    >
      {{ $t("related_links") }}
      <font-awesome-icon
        v-if="show"
        class="mr-2"
        icon="fa-solid fa-angle-down"
      />
      <font-awesome-icon v-else class="mr-2" icon="fa-solid fa-angle-right" />
    </div>
    <div v-if="show" class="mx-4">
      <ul
        class="sm:grid sm:grid-cols-2 lg:grid-cols-3 list-inside list-disc text-xs"
      >
        <li
          v-for="r in props.links.repo"
          :key="r"
          class="overflow-hidden whitespace-nowrap"
        >
          <a :href="'https://github.com/' + r">
            <font-awesome-icon class="mr-2" :icon="['fab', 'github']" />

            {{ r }}</a
          >
        </li>
        <li v-for="(r, index) in props.links.article" :key="r">
          <a :href="r">
            <font-awesome-icon class="mr-2" :icon="['fab', 'medium']" />
            {{ $t("article") }} {{ index }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  links: { type: Object, required: true },
  title: { type: String, required: true },
});
const show = ref(false);
function toggleShow() {
  show.value = !show.value;
}
</script>

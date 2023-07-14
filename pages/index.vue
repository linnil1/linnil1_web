<template>
  <div class="container mx-auto max-w-3xl">
    <div class="pt-16 flex flex-wrap items-center justify-center">
      <img class="w-48 rounded-full" src="~/assets/linnil1.png" />
      <div class="m-16 w-64 text-center">
        <div class="text-3xl p-4">{{ $t("hi") }}</div>
        <div class="text-lg">{{ $t("intro") }}</div>
        <div class="flex flex-row flex-wrap items-center justify-center gap-5">
          <div class="mt-10 basis-full text-center">{{ $t("contact") }}:</div>
          <social-link
            name="Github"
            brand="github"
            url="https://github.com/linnil1"
          />
          <social-link
            name="Blog"
            brand="medium"
            url="https://linnil1.medium.com"
          />
        </div>
      </div>
    </div>
    <hr-text :text="$t('status')" />
    <div class="flex flex-wrap item-start justify-center">
      <card-counter
        :count="links.reduce((acc, i) => acc + i.repo.length, 0)"
        :text="$t('open_source_repos')"
      />
      <card-counter
        :count="links.reduce((acc, i) => acc + i.article.length, 0)"
        :text="$t('articles')"
      />
      <card-counter
        :count="links.reduce((acc, i) => acc + i.alive, 0)"
        :text="$t('alive_services')"
      />
    </div>
    <hr-text class="mt-32" :text="$t('repository')" />
    <div>
      <repo-classification
        v-for="link in links"
        :key="link.title"
        :links="link"
        :title="link.title"
      >
        <p>{{ link.text }}</p>
      </repo-classification>
    </div>

    <hr-text class="mt-32 mb-16" :text="$t('experience')" />
    <div class="m-4">
      <row-experience
        v-for="exp in experiences"
        :key="exp.title"
        class="my-10"
        :title="exp.title"
        :date="exp.date"
        :type="exp.type"
      />
    </div>
  </div>
  <footer
    class="flex flex-wrap items-center justify-center bg-gray-800 text-white p-2 mt-32"
  >
    <div class="sm:flex-1"></div>
    <div class="text-center flex-1 m-4">
      <a href="https://github.com/linnil1/linnil1_web">
        Powered by
        <font-awesome-icon
          class="mx-2"
          :icon="['fab', 'github']"
        />linnil1/linnil1_web
      </a>
      <p>&copy; 2023 linnil1. All rights reserved.</p>
    </div>
    <div class="flex items-center justify-end m-4 space-x-2 flex-1 text-white">
      <span>Language:</span>
      <select
        v-model="locale"
        class="border border-gray-300 text-black rounded px-2 py-1 focus:outline-none focus:border-blue-500"
      >
        <option value="en">English</option>
        <option value="zh-tw">台灣中文</option>
      </select>
    </div>
  </footer>
</template>

<script setup langs="ts">
useHead({
  title: "linnil1's Personal Website | linnil1 ㄉ個人網站",
  meta: [
    {
      name: "name",
      content: "linnil1",
    },
    {
      name: "author",
      content: "linnil1",
    },
    {
      name: "description",
      content:
        "Hi, I'm linnil1. I love Python, Open-source, bioinfomatics and Devops",
    },
  ],
});
const { locale } = useI18n();
const { data: links } = await useFetch("/api/repos?lang=" + locale.value);
const { data: experiences } = await useFetch(
  "/api/experiences?lang=" + locale.value,
);
// data structure is described in server/api/*
watch(locale, async () => {
  const resp = await fetch("/api/repos?lang=" + locale.value);
  links.value = await resp.json();
  const resp1 = await fetch("/api/experiences?lang=" + locale.value);
  experiences.value = await resp1.json();
});
</script>

<template>
  <div class="container mx-auto max-w-3xl">
    <div class="pt-16 flex flex-wrap items-center justify-center">
      <img
        class="w-48 rounded-full"
        src="~/assets/linnil1.png"
      >
      <div class="m-16 w-64 text-center">
        <div class="text-3xl">
          Hi, I'm linnil1
        </div>
        <div class="text-lg">
          I love Python, Open-source, bioinfomatics and Devops
        </div>
        <div class="flex flex-row flex-wrap items-center justify-center gap-5">
          <div class="mt-10 basis-full text-center">
            Contact me:
          </div>
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
    <hr-text text="Status" />
    <div class="flex flex-wrap item-start justify-center">
      <card-counter
        :count="Object.values(links).reduce((acc, i) => acc + i.repo.length, 0)"
        text="Open Source Repos"
      />
      <card-counter
        :count="
          Object.values(links).reduce((acc, i) => acc + i.article.length, 0)
        "
        text="Articles"
      />
      <card-counter
        :count="Object.values(links).reduce((acc, i) => acc + i.alive, 0)"
        text="Alive services"
      />
    </div>
    <hr-text
      class="mt-32"
      text="Repository"
    />
    <div>
      <repo-classification
        v-for="link in links"
        :key="link.title"
        :links="link"
        :title="link.title"
      >
        <p v-html="link.text" />
      </repo-classification>
    </div>

    <hr-text
      class="mt-32 mb-16"
      text="Experience"
    />
    <div class="max-w-xl m-4">
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
</template>

<script setup langs="ts">
useHead({
  title: "linnil1's Personal Website | linnil1ㄉ個人網站",
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

const { data: links } = await useFetch("/api/repos");
/*
const links = {
  frontend: {
    title: "Frontend",
    repo: [
      "linnil1/nyadoi_oh_so_cute",
    ],
    alive: 1,
    article: [
    ],
    text: `
      Description
    `,
  },
};
*/
const { data: experiences } = await useFetch("/api/experiences");
/*
const experiences = [
  {
    title: "Student in c4lab",
    date: "2019 - 2022",
    type: "c4lab",
  },
]
 */
</script>

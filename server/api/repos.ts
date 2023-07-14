export default defineEventHandler(async (event) => {
  let data = await queryKV(
    "repos",
    JSON.parse(
      JSON.stringify([
        {
          title: "Frontend",
          "title.zh-tw": "前端",
          repo: ["linnil1/nyadoi_oh_so_cute"],
          alive: 1,
          article: [],
          text: `
          Long Description. Long Description.
          Long Description. Long Description.
          Long Description. Long Description.
          Long Description. Long Description.
          Long Description. Long Description.
          Long Description. Long Description.
          Long Description. Long Description.
          Long Description. Long Description.
          Long Description. Long Description.
          Long Description. Long Description.
          `,
          "text.zh-tw": `
          很長很長很長很長很長很長ㄉ說明。
          很長很長很長很長很長很長ㄉ說明。
          很長很長很長很長很長很長ㄉ說明。
          很長很長很長很長很長很長ㄉ說明。
          很長很長很長很長很長很長ㄉ說明。
          很長很長很長很長很長很長ㄉ說明。
          很長很長很長很長很長很長ㄉ說明。
          `,
          skill: {
            Advanced: ["vuejs"],
            Intermediate: ["tailwindcss"],
            Familiar: ["html5"],
          },
        },
      ]),
    ),
  );
  const lang: string = getQuery(event).lang?.toString() || "en";
  data = replaceByLang(data, lang, "title");
  data = replaceByLang(data, lang, "text");
  return data;
});

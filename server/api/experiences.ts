export default defineEventHandler(async (event) => {
  let data = await queryKV(
    "experiences",
    JSON.parse(
      JSON.stringify([
        {
          title: "Student in c4lab",
          "title.zh-tw": "c4lab 學生",
          date: "2019 - 2022",
          type: "c4lab",
        },
      ]),
    ),
  );
  const lang: string = getQuery(event).lang?.toString() || "en";
  data = replaceByLang(data, lang, "title");
  return data;
});

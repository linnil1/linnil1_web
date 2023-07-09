export default defineEventHandler(async (event) => {
  if (typeof linnil1_repos_list != "undefined")
    return await linnil1_repos_list.get("experiences", { type: "json" });
  const config = useRuntimeConfig();
  if (config.use_nitro_db)
    return await useStorage("db").getItem("experiences", { type: "json" });
  return [
    {
      title: "Student in c4lab",
      date: "2019 - 2022",
      type: "c4lab",
    },
  ];
});

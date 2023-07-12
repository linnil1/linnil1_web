export default defineEventHandler(async (event) => {
  if (typeof linnil1_repos_list != "undefined")
    return await linnil1_repos_list.get("repos", { type: "json" });
  const config = useRuntimeConfig();
  if (config.use_nitro_db)
    return await useStorage("db").getItem("repos", { type: "json" });
  return {
    frontend: {
      title: "Frontend",
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
      skill: {
        Advanced: [],
        Intermediate: ["vuejs", "tailwindcss"],
        Familiar: [],
      },
    },
  };
});

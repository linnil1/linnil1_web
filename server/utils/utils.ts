export async function queryKV(key) {
  if (typeof linnil1_profile != "undefined")
    return await linnil1_profile.get(key, { type: "json" });
  const config = useRuntimeConfig();
  if (config.use_nitro_db)
    return await useStorage("db").getItem(key, { type: "json" });
}

export function replaceByLang(data, lang, key) {
  for (const i in data) {
    const d = data[i];
    if (d[key + "." + lang] !== undefined) d[key] = d[key + "." + lang];
    for (const j of Object.keys(d)) {
      if (j.startsWith(key + ".")) delete d[j];
    }
  }
  return data;
}

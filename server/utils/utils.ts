type DataType = Array<{ [key: string]: any }>;

export async function queryKV(
  key: string,
  default_value: DataType = [],
): Promise<DataType> {
  // @ts-ignore
  if (typeof linnil1_profile !== "undefined") {
    // @ts-ignore
    return await linnil1_profile.get(key, { type: "json" });
  }
  const config = useRuntimeConfig();
  if (config.use_nitro_db) {
    return (await useStorage("db").getItem(key, { type: "json" })) || [];
  }
  return default_value;
}

export function replaceByLang(
  data: DataType,
  lang: string,
  key: string,
): DataType {
  for (const i in data) {
    const d = data[i];
    if (d[key + "." + lang] !== undefined) {
      d[key] = d[key + "." + lang];
    }
    for (const j of Object.keys(d)) {
      if (j.startsWith(key + ".")) {
        delete d[j];
      }
    }
  }
  return data;
}

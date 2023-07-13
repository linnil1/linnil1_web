<template>
  <div
    class="relative flex items-center"
    @mouseover="show = true"
    @mouseleave="show = false"
  >
    <div
      class="rounded-full border-4 w-fit p-1"
      :class="levelToColor(props.level)"
    >
      <!-- devicon font is ugly -->
      <!--i :class="['devicon-' + props.brand + '-original', 'colored']"></i-->
      <img
        class="w-5 h-5 overflow-hidden"
        :src="setImg(props.brand)"
        :alt="brand"
      />
    </div>
    <div
      v-if="show"
      class="absolute -bottom-10 z-10 text-white bg-gray-600 w-fit p-1 mx-2 leading-none"
    >
      {{ props.brand }} : {{ props.level }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  brand: { type: String, required: true },
  level: { type: String, required: true },
});
let show = ref(false);
function setImg(brand) {
  const other_links = {
    airflow:
      "https://cwiki.apache.org/confluence/download/attachments/145723561/airflow_64x64_emoji_transparent.png?api=v2",
    cwl: "https://raw.githubusercontent.com/common-workflow-language/media/main/CWL-Logo-nofonts.svg",
    pyplot:
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    scikit_learn:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    slurm: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Slurm_logo.svg",
    plotly:
      "https://raw.githubusercontent.com/plotly/plotly.py/master/packages/javascript/jupyterlab-plotly/style/plotly.svg",
    "mkdocs-material":
      "https://raw.githubusercontent.com/squidfunk/mkdocs-material/master/.github/assets/logo.svg",
    influxdb:
      "https://www.vectorlogo.zone/logos/influxdata/influxdata-icon.svg",
  };
  if (brand in other_links) return other_links[brand];
  let favor = "original";
  if (brand == "tailwindcss" || brand == "django" || brand == "kubernetes")
    favor = "plain";
  return (
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
    brand +
    "/" +
    brand +
    "-" +
    favor +
    ".svg"
  );
}
function levelToColor(level) {
  // gold silver bronze
  if (level === "Advanced") return "border-[#D9BE4C]";
  else if (level === "Intermediate") return "border-[#B3B4BA]";
  else if (level === "Familiar") return "border-[#C08A50]";
}
</script>

const fs = require("fs");  // eslint-disable-line

fs.writeFileSync(
  "db/experiences",
  JSON.stringify([
    {
      title: "Student in c4lab",
      "title.zh-tw": "c4lab 學生",
      date: "2019 - 2022",
      type: "c4lab",
    },
  ]),
);

fs.writeFileSync(
  "db/repos",
  JSON.stringify([
    {
      title: "Frontend",
      "title.zh-tw": "前端",
      repo: ["linnil1/nyadoi_oh_so_cute"],
      alive: 1,
      article: [],
      skill: {
        Advanced: [],
        Intermediate: ["vuejs"],
        Familiar: ["html5"],
      },
      text: " Descriptions ",
      "text.zh-tw": " 敘述 ",
    },
  ]),
);

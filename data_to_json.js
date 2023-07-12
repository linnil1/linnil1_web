const fs = require("fs");

fs.writeFileSync(
  "db/experiences",
  JSON.stringify([
    {
      title: "Student in c4lab",
      date: "2019 - 2022",
      type: "c4lab",
    },
  ]),
);

fs.writeFileSync(
  "db/repos",
  JSON.stringify({
    frontend: {
      title: "Frontend",
      repo: ["linnil1/nyadoi_oh_so_cute"],
      alive: 1,
      article: [],
      skill: {
        Advanced: [],
        Intermediate: ["vuejs"],
        Familiar: ["html5"],
      },
      text: `
        Descriptions
    `,
    },
  }),
);

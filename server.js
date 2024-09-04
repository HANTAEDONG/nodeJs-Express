const express = require("express");
const app = express();
const port = 3000;

let singerMap = new Map();
let id = 1;

let singer1 = {
  singerName: "박효신",
  sub: "112만명",
  singNum: "500개",
};
let singer2 = {
  singerName: "아이유",
  sub: "89.4만명",
  singNum: "534개",
};
let singer3 = {
  singerName: "태양",
  sub: "54.8만명",
  singNum: "726개",
};

singerMap.set(id++, singer1);
singerMap.set(id++, singer2);
singerMap.set(id++, singer3);

app.use(express.json());

// GET, 전체 가수 목록
app.get("/singers", (req, res) => {
  let singerObj = Object.fromEntries(singerMap);
  let singerJSON = JSON.stringify(singerObj);
  res.json(singerJSON);
});

// GET, 가수 조회
app.get("/singer/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  if (singerMap.get(id)) {
    res.json(singerMap.get(id));
  }
});
// 결과
// {
//     "singerName": "박효신",
//     "sub": "112만명",
//     "singNum": "500개"
// }

// POST, 가수 등록
app.post("/singer", (req, res) => {
  let singer = req.body;
  if (req.body) {
    const currentId = id;
    singerMap.set(id++, req.body);
    const singer = singerMap.get(currentId);
    res.send(`${singer.singerName}님 새로운 가수로 등록되었습니다..`);
  } else {
    res.send("오류가 났습니다.");
  }
});
// 결과
// NCT님 새로운 가수로 등록되었습니다..

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

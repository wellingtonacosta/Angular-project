const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    id: 1,
    name: "Rajveer TESTE",
    email: "chandler@email.com",
    id: 2,
    name: "Leela TESTE",
    email: "Leela@email.com",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

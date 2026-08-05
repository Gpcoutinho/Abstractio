const express = require("express");
const cors = require("cors");

const router = require("./router");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Mock server do Tentacle rodando em http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  console.error(new Date().toISOString(), "404", req.method, req.originalUrl);
  next();
});

app.listen(port, () => {
  console.log(`Web server listening at http://localhost:${port}`);
});

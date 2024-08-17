import express from "express";
const app = express();
const port = process.env.PORT || 3e3;
app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.use((req, res) => {
  res.status(404);
  res.send("404");
});
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500);
  res.send("500");
});
app.listen(port, () => console.log(
  `Express started on http://localhost:${port} press Ctrl-C to terminate.`
));
//# sourceMappingURL=index.js.map

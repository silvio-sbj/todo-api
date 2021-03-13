const app = require("./");

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.info(`Server is running on http://localhost:${port}`);
});

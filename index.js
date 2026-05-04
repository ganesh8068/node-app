import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("App is running in Node.js");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

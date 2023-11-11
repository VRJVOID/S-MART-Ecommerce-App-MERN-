import express from 'express';
import colors from 'colors';


const app = express();
app.get("/", (req, res) => {
  res.send("<h1> Welcome To E-commerce App </h1>");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgMagenta.white);
});

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { isCorrectAnswer, Questions, randomQuestion } from "./questions.js";

const app = express();

app.get("/question/random", (req, res) => {
  const { id, question, answers } = randomQuestion();

  res.send({ id, question, answers });
});

app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Hello http://localhost:${server.address().port}`);
});

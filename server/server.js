import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { isCorrectAnswer, Questions, randomQuestion } from "./questions.js";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/question/random", (req, res) => {
    const { id, question, answers } = randomQuestion();

    res.send({ id, question, answers });
});

const server = app.listen(3000, () => {
    console.log(`Hello http://localhost:${server.address().port}`);
});

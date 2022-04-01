import express from "express";
import "express-async-errors";
let router = express.Router();

let tweets = [
  {
    id: "1",
    text: "드림코더분들 화이팅",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "강아지.jpg",
  },
  {
    id: "2",
    text: "안뇽!",
    createdAt: Date.now().toString(),
    name: "Ellie",
    username: "ellie",
  },
];
//Get /tweets
//Get /tweets?username=:username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => {
        username == tweet.username;
      })
    : tweets;
  res.status(200).json(data);
});
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id == id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.sendStatus(404).json({ message: "tweet not found" });
  }
});
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id == id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.sendStatus(204);
  }
});
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((t) => t.id !== id);
  res.sendStatus(204);
});
//Get /tweets/:id
//POST /tweets
//PUT /tweets/:id
//DELETE /tweets/:id

export default router;

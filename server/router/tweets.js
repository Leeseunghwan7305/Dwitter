const express = require("exress");
import "express-async-errors";
let router = express.Router();

const tweets = {
  id: "1",
  text: "드림코더분들 화이팅",
  createdAt: Date.now().toString(),
  name: "Bob",
  username: "bob",
  url: "강아지.jpg",
};
//Get /tweets
//Get /tweets?username=:username
//Get /tweets/:id
//POST /tweets
//PUT /tweets/:id
//DELETE /tweets/:id

export default router;

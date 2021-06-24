import express, { request, response } from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("worked");
});

app.post("/test-post", (request, response) => {
  return response.send("POST worked");
});

app.listen(3000, () => console.log("server is running"));
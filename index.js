// code away!
const express = require("express");
const morgan = require("morgan");
const server = require("./server.js");

server.listen(4000, () => {
  console.log("\n* Server Running on http://localhost:4000 *\n");
});

// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(
//   jsonServer.rewriter({
//     "/*": "/$1",
//   })
// );
// server.use(router);

// const PORT = process.env.PORT || 3001;

// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error starting server:", err);
//   } else {
//     console.log(`JSON Server is running on port ${PORT}`);
//   }
// });
const jsonServer = require("json-server");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json"); // Path to your JSON file
const db = low(adapter);

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

const jsonServer = require("json-server");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const cors = require("cors"); // Import cors middleware

const adapter = new FileSync("db.json"); // Path to your JSON file
const db = low(adapter);

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Enable CORS for all routes
server.use(cors());

// Allow CORS for specific origins (e.g., localhost)
// Replace 'http://localhost:3000' with your frontend's URL
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Enable credentials (if needed)
  })
);

server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

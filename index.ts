// it's a fake backend only mocking

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { join } from "path";
import session from "express-session";
import connectToDB from "./db/index";
import MongoStore from "connect-mongo";
import routes from "./routes";
import cors from "cors";

const app = express();

const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_INITDB_DATABASE = process.env.MONGO_INITDB_DATABASE
const MONGO_URL = process.env.MONGO_URL;
const MONGO_PORT = process.env.MONGO_PORT

connectToDB();
const port = 3001;

const sessionStorage = new MongoStore({
  mongoUrl: `mongodb://${MONGO_URL || "mongo-service.calendar.svc.cluster.local"}:${MONGO_PORT}/${MONGO_INITDB_DATABASE}`,
  collectionName: "session",
});

if (process.env.NODE_ENV === "development")
  app.use(
    cors({
      origin: `"http://localhost:3000"`,
      credentials: true,
    })
  );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.static(join(__dirname, "build")));
app.use(
  session({
    secret: "secretKey@secretKey",
    cookie: { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 },
    name: "session",
    saveUninitialized: false,
    store: sessionStorage,
    resave: false,
  })
);

routes(app);

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});

app.get("/**", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
});

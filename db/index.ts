import mongoose from "mongoose";

const MONGO_INITDB_ROOT_PASSWORD = process.env.MONGO_INITDB_ROOT_PASSWORD;
const MONGO_INITDB_ROOT_USERNAME = process.env.MONGO_INITDB_ROOT_USERNAME;
const MONGO_INITDB_DATABASE = process.env.MONGO_INITDB_DATABASE
const MONGO_URL = process.env.MONGO_URL;
const MONGO_PORT = process.env.MONGO_PORT

console.log(MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_DATABASE, MONGO_URL, MONGO_PORT)

const db_url = `mongodb://${MONGO_URL || "mongo-service.calendar.svc.cluster.local"}:${MONGO_PORT}/${MONGO_INITDB_DATABASE}`


export default function connect() {
  
  
  mongoose
    .connect(db_url)
    .then(() => {
      console.log("Connecting to mongodb");
    })
    .catch(err => {
      console.error(err);
    });
}

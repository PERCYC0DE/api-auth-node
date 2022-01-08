import mongoose, { mongo } from "mongoose";
import { config } from "./config";
const URI = `mongodb+srv://${config.dbUsername}:${config.dbPassword}@${config.dbHost}/${config.dbDatabase}?retryWrites=true&w=majority`;

mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((error) => console.log(error));

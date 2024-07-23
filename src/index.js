import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// import mongoose from "mongoose";
// import {DB_NAME } from "./constants";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection faild", err);
  });

/*

import express from "express";
const app = express();
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        app.on("error",(error) => {
            console.error("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on  port  ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error: ", error);
        throw err
    }
})()

    */

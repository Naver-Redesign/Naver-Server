import express from "express";
const app = express();
import connectDB from "./Logger/db";

import cors from "cors";

// Connect Database
connectDB();

// Define Routes
app.use(express.json());

app.use(cors());

app.use("/api/videos", require("./api/videos"));
app.use('/api/main', require('./api/main'));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "production" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app
  .listen(5000, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: 5000 🛡️
    ################################################
  `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

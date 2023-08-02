require("dotenv").config();
const fastify = require("fastify")();
const mongoose = require("mongoose");

// Import my routes
// const userRoutes = require("./routes/user.routes.js");
// Connect to my DB
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connect Database"))
  .catch((e: any) => console.log("Error while connecting Database", e));
// Start my server
// fastify.register(userRoutes, { prefix: "/users" });

fastify.listen(
  { port: process.env.PORT || 5001 },
  (err: any, address: string) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
  }
);

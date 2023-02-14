import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import server from "./server.js";

const port = process.env.PORT || 3001;

//db
mongoose.connect(process.env.MONGO_URL);

// server
mongoose.connection.on("connected", () => {
  server.listen(port, () => {
    console.log(`server is running on port ${port}`);
    console.table(listEndpoints(server));
  });
});

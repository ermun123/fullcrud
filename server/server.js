import app from "./index.js";
import mongoose from "mongoose";

const port = 5000;
const uri =
  "mongodb+srv://Temaa:FnfKovLgs7o3UBUn@cluster0.0fob56l.mongodb.net/green";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { connection } = mongoose;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.listen(port, () =>
  console.log(`server is listening on port:http://localhost:${port}`)
);

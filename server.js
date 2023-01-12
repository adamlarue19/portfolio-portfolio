const express = require("express");
const router = express.Router();
const cors = require("cors");


// server used to send send emails
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log("Server Running"));

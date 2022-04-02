const express = require("express");
const photoRouter = require("./routes/photos");
const userRouter = require("./routes/user");
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/photos", photoRouter);
app.use("/user", userRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
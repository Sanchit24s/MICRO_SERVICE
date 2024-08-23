const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5002;
// const Routes = require("./routes/index");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    return res.json({ message: "It's working post micro ..." });
});

// app.use(Routes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
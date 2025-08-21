import express from "express";
const app = express();


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("About Page!");
});

app.post("/register", (req, res) => {
    res.send("This is the register page");
});

app.put("/update", (req, res) => {
    res.send("This is the update page");
});

app.delete("/delete", (req, res) => {
    res.send("This is the delete page");
})


app.listen(3000, () => {
    console.log("Server started at port 3000!");
});
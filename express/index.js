import express from "express";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/about", (req, res) => {
    res.status(200).json({ message: "About Page!" });
});

app.get("/contact", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "contact.html"));
});

app.get("/offers", (req, res) => {
    res.status(302).redirect("/contact");
});

app.post("/register", (req, res) => {
    res.status(200).send("This is the register page");
});

app.put("/update", (req, res) => {
    res.send("This is the update page");
});

app.delete("/delete", (req, res) => {
    res.send("This is the delete page");
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "error404.html"));
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
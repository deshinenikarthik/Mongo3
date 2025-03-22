const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
app.set(path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const Chat = require("./models/chat.js");

main().then(() => {
    console.log("Connection successfull");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    // const chat = await Chat.findById(id);
    // console.log(chat);
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

app.patch("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let message = req.body.msg;
    // console.log(id);
    // console.log(message);
    await Chat.findByIdAndUpdate(id, { msg: message });
    res.redirect("/chats");
})

app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    const chat = await Chat.findById(id);
    console.log(chat);
    res.render("edit.ejs", { chat });
})

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    const newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    newChat.save().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    res.redirect("/chats");
})

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
})

app.get("/", (req, res) => {
    res.send("route is working");
})
app.listen(3000, () => {
    console.log("App is listening");
})
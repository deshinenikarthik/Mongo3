const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(() => {
    console.log("Connection successfull");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "hi my name is neha",
        created_at: new Date(),
    },
    {
        from: "sneha",
        to: "rahul",
        msg: "Hey Rahul! It was good. How about yours?",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "divya",
        msg: "Did you finish the project?",
        created_at: new Date(),
    },
    {
        from: "divya",
        to: "amit",
        msg: "Almost done! Just some minor tweaks left.",
        created_at: new Date(),
    },
    {
        from: "kiran",
        to: "rohit",
        msg: "Are we still on for the movie tonight?",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "kiran",
        msg: "Yes! I booked the tickets already.",
        created_at: new Date(),
    },
    {
        from: "arjun",
        to: "meera",
        msg: "Did you check out the new restaurant?",
        created_at: new Date(),
    },
    {
        from: "meera",
        to: "arjun",
        msg: "Not yet, but I heard great reviews!",
        created_at: new Date(),
    },
    {
        from: "tanya",
        to: "vikram",
        msg: "Good morning! Ready for the big day?",
        created_at: new Date(),
    },
    {
        from: "vikram",
        to: "tanya",
        msg: "Good morning! Yes, feeling a bit nervous though.",
        created_at: new Date(),
    }
];
Chat.insertMany(allChats);
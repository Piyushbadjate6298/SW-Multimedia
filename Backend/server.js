const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

dotenv.config();

const Lead = require(path.join(__dirname, "models", "Lead"));

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/sw_multimedia";

let dbConnected = false;

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    dbConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    dbConnected = false;
    console.error("MongoDB connection error:", err);
    console.error("Falling back to local file storage for leads.");
  }

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
}

start();

app.get("/", (req, res) => res.json({ ok: true }));

app.post("/api/leads", async (req, res) => {
  try {
    const { name, phone, email, course, message } = req.body;
    if (!name || !phone || !email || !course) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const leadData = { name, phone, email, course, message, createdAt: new Date() };

    if (dbConnected && mongoose.connection.readyState === 1) {
      const lead = new Lead(leadData);
      await lead.save();
      return res.json({ success: true, lead });
    }

    // Fallback: save to local JSON file
    try {
      const fallbackFile = path.join(__dirname, "leads-fallback.json");
      let arr = [];
      if (fs.existsSync(fallbackFile)) {
        const raw = fs.readFileSync(fallbackFile, "utf8");
        arr = raw ? JSON.parse(raw) : [];
      }
      arr.push(leadData);
      fs.writeFileSync(fallbackFile, JSON.stringify(arr, null, 2), "utf8");
      return res.json({ success: true, lead: leadData, fallback: true });
    } catch (fileErr) {
      console.error("Fallback save error:", fileErr);
      return res.status(500).json({ success: false, error: "Server error" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// server is started from `start()` after attempting DB connection
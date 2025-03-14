const express = require("express");
const path = require("path");

const app = express();

// Set up Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware for serving static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => res.render("list", { title: "List Page" }));
app.get("/approve", (req, res) => res.render("approve", { title: "Approve Page" }));
app.get("/deny", (req, res) => res.render("deny", { title: "Deny Page" }));
app.get("/request", (req, res) => res.render("request", { title: "Request Page" }));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

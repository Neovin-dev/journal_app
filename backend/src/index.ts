import express from "express";

const app = express();
const PORT = 3000;

// This method mounts middleware to your Express app so it runs on every incoming request before reaching your routes. it attaches it ti req.body
// This built-in function creates the actual middleware that looks for Content-Type: application/json headers and parses the raw text into an object.
app.use(express.json());

app.get("/api/health", (_req, res) => {
  // res.json() serialises a JavaScript value into JSON and sends it as an HTTP response.
  res.json({
    status: "ok",
    message: "Journal API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

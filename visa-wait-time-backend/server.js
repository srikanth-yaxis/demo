const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Proxy endpoint to fetch visa wait times
app.get("/api/wait-times", async (req, res) => {
  const { cid } = req.query;

  if (!cid) {
    return res.status(400).send("Error: 'cid' query parameter is required");
  }

  try {
    // URL for the external API
    const url = `https://travel.state.gov/content/travel/resources/database/database.getVisaWaitTimes.html?cid=${cid}&aid=VisaWaitTimesHomePage`;

    // Fetch data from the API
    const response = await axios.get(url);

    // Send the API response data to the frontend
    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error fetching wait times:", error.message);
    res.status(500).send("Error fetching visa wait times");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

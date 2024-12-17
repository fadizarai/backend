const express = require('express');
const app = express();

// Simulating car counts for each route ID (now simplified to numbers)
const routes = {
  1: 2,  // Example car count for route 1
  2: 5,  // Example car count for route 2
  3: 1,  // Example car count for route 3
  4: 4,  // Example car count for route 4
  5: 0,  // Example car count for route 5
  6: 3,  // Example car count for route 6
  7: 6,  // Example car count for route 7
  8: 2,  // Example car count for route 8
  9: 7,  // Example car count for route 9
  10: 4, // Example car count for route 10
};

// Function to determine the color based on car count
const getRoadStatus = (carCount) => {
  if (carCount >= 5) return 'red';
  if (carCount === 3 || carCount === 4) return 'yellow';
  return 'green';
};

// Route to get the status of all roads
app.get('/status', async (req, res) => {
  const statusArray = Object.keys(routes).map(id => {
    const count = routes[id];
    const statusText = getRoadStatus(count);
    return { id, statusText };
  });

  return res.json({ status: 200, routes: statusArray });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});

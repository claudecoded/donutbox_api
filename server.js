const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Mock Database (In-Memory)
let donutRecipes = [
  {
    id: 1,
    name: "Classic Glazed",
    type: "Yeast",
    toppings: ["Sugar Glaze"],
    calories: 240
  },
  {
    id: 2,
    name: "Boston Cream",
    type: "Yeast",
    toppings: ["Chocolate Ganache", "Custard Filling"],
    calories: 300
  },
  {
    id: 3,
    name: "Strawberry Sprinkles",
    type: "Cake",
    toppings: ["Strawberry Icing", "Rainbow Sprinkles"],
    calories: 270
  }
];

// Root Route (Welcome Message)
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the DonutBox API! 🍩",
    endpoints: {
      getAllDonuts: "GET /api/donuts",
      getDonutById: "GET /api/donuts/:id",
      createDonut: "POST /api/donuts"
    }
  });
});

// GET: List all donuts
app.get('/api/donuts', (req, res) => {
  res.json(donutRecipes);
});

// GET: Find a donut by ID
app.get('/api/donuts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const donut = donutRecipes.find(d => d.id === id);
  
  if (!donut) {
    return res.status(404).json({ error: "Donut not found in the box!" });
  }
  
  res.json(donut);
});

// POST: Add a new donut recipe
app.post('/api/donuts', (req, res) => {
  const { name, type, toppings, calories } = req.body;
  
  if (!name || !type || !toppings || !calories) {
    return res.status(400).json({ error: "Please fill in all the donut properties." });
  }

  const newDonut = {
    id: donutRecipes.length + 1,
    name,
    type,
    toppings,
    calories
  };

  donutRecipes.push(newDonut);
  res.status(201).json({ message: "New donut fried and glazed successfully! 🍩", data: newDonut });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🍩 Donut server running at http://localhost:${PORT}`);
});

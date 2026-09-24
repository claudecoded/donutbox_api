# 🍩 DonutBox API

A simple, lightweight, and delicious API built with **Node.js** and **Express** to manage donut flavors and recipes. This project is perfect for learning the fundamentals of HTTP methods (GET and POST).

## 🚀 Getting Started

### Prerequisites
You will need [Node.js](https://nodejs.org) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd YOUR_REPOSITORY_NAME
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the server:**
   ```bash
   npm start
   ```
   The server will be live at `http://localhost:3000`

## 🛠️ Available Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/` | Returns the welcome message and available endpoints. |
| **GET** | `/api/donuts` | Returns a list of all donut flavors. |
| **GET** | `/api/donuts/:id` | Fetches a specific donut recipe by its ID. |
| **POST** | `/api/donuts` | Adds a new donut flavor to the box via JSON body. |

### Example JSON Body for Creating a Donut (POST)
```json
{
  "name": "Maple Bacon",
  "type": "Yeast",
  "toppings": ["Maple Syrup Glaze", "Crispy Bacon Bits"],
  "calories": 320
}
```

## 📜 License
This project is licensed under the MIT License.

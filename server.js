const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let database = {
  products: [
    { id: 1, name: "Box 1 - Mehndi Design", price: 1500 },
    { id: 2, name: "Box 2 - Bridal Box", price: 2500 },
    { id: 3, name: "Box 3 - Gift Box", price: 1800 },
    { id: 4, name: "Box 4 - Surprise Box", price: 2000 },
    { id: 5, name: "Box 5 - Eid Box", price: 1200 },
    { id: 6, name: "Box 6 - Premium Box", price: 3000 }
  ],
  users: [{ id: 1, name: "Zainab User", city: "Rawalpindi", email: "zainab@example.com" }],
  orders: [],
  messages: []
};

app.get('/api/products', (req, res) => { res.json(database.products); });
app.post('/api/orders', (req, res) => {
  const newOrder = { id: database.orders.length+1, items: req.body.items, total: req.body.total, status: "To Pay", date: new Date() };
  database.orders.push(newOrder);
  res.json({ success: true, order: newOrder });
});
app.post('/api/register', (req, res) => {
  const newUser = { id: database.users.length+1, name: req.body.name, email: req.body.email };
  database.users.push(newUser);
  res.json({ success: true, user: newUser });
});
app.get('/api', (req, res) => { res.json({ message: "Backend Running" }); });

app.listen(PORT, () => { console.log(`Server on ${PORT}`); });

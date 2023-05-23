const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Definición del modelo
const Todo = mongoose.model('Todo', { text: String });

app.use(express.json());

// Rutas CRUD
app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/api/todos', async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.json(todo);
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndUpdate(id, { text: req.body.text });
  res.sendStatus(200);
});

app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.sendStatus(200);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

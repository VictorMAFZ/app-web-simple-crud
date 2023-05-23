import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemSecondaryAction, IconButton } from '@mui/material';
import { AddCircle, Delete } from '@mui/icons-material';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3000/api/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (text.trim() !== '') {
      const response = await axios.post('http://localhost:3000/api/todos', { text });
      console.log(response);
      setTodos([...todos, response.data]);
      setText('');
    }
  };

  const updateTodo = async (id, newText) => {
    await axios.put(`http://localhost:3000/api/todos/${id}`, { text: newText });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3000/api/todos/${id}`);
    fetchTodos();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Todo App
      </Typography>
      <TextField
        label="Agregar tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button
        variant="contained"
        startIcon={<AddCircle />}
        onClick={addTodo}
      >
        Agregar
      </Button>
      <List>
        {todos.map(todo => (
          <ListItem key={todo._id}>
            <TextField
              value={todo.text}
              onChange={e => updateTodo(todo._id, e.target.value)}
              fullWidth
              margin="normal"
              variant="filled"
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo._id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;

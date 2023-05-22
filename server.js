const express = require('express');
const cors = require('cors');
const todosRouter = require('./routes/todos');
const openaiRoutes = require('./routes/openai');

const app = express();
const PORT = 3000;

// Setting CORS to allow chat.openapi.com is required for ChatGPT to access your plugin
app.use(cors({ origin: [`http://localhost:${PORT}`, 'https://chat.openai.com'] }));
app.use(express.json());

// Simple request logging to see if your plugin is being called by ChatGPT
app.use((req, res, next) => {
  console.log(`Request received: ${req.method}: ${req.path}`)
  next()
})

// OpenAI Required Routes
app.use(openaiRoutes);

// The dummy todos API
app.use('/todos', todosRouter);

// Proxy server to another API outside of localhost:3000
const api_url = 'http://localhost';

app.all('/:path', async (req, res) => {
  const { path } = req.params;
  const url = `${api_url}/${path}`;

  console.log(`Forwarding call: ${req.method} ${path} -> ${url}`);

  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios({
      method: req.method,
      url,
      headers,
      params: req.query,
      data: req.body,
    });

    res.send(response.data);
  } catch (error) {
    console.error(`Error in forwarding call: ${error}`);
    res.status(500).send('Error in forwarding call');
  }
});

app.listen(PORT, () => {
  console.log(`Plugin server listening on port ${PORT}`);
});
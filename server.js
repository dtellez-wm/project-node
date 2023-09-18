const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/data', (req, res) => {
  setTimeout(() => {
    res.json({
      message: "¡Hola desde el servidor!"
    });
  }, 2000); // Esperará 2 segundos antes de enviar la respuesta.
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

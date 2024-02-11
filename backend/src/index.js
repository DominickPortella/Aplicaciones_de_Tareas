import app from './app';

const PORT = 3000; // Cambiar al puerto deseado, asegúrate de que esté disponible

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

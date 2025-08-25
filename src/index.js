const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.status(200).send({ message: "Hola Mundo DevOps!" });
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Servidor corriendo en :${port}`));
}

module.exports = app; // para pruebas

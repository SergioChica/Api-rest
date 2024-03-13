import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("Conexion aprovada"));

app.get("/",(req, res) => {

    const htlmResponse = `
     <html>
        <head>
            <title>Hola</title>
        </head>
        <body>
            <h1>SiNo</h1>
        </body>
     </html>
    `
    res.send(htlmResponse)
  }
)

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
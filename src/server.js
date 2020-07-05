import express from "express";
import dotenv from "dotenv";
import routes from "./api/routes";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});

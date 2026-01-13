import "dotenv/config";
import express from "express"
import calc from "./middleware/routes/calc.ts"
import auth from "./middleware/routes/authRoutes.ts"
import accountingService from "./services/AccountingServiceMap.ts";

const app = express();

app.use(express.json());

app.use("/calc", calc);
app.use("/auth", auth);


app.listen(3005, () => {
    console.log("Server started on port 3005");
});
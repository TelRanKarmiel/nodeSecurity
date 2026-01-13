import "dotenv/config";
import express from "express"
import calc from "./middleware/routes/calc.ts"
import auth from "./middleware/routes/authRoutes.ts"
import accountingService from "./services/AccountingServiceMap.ts";

const app = express();

app.use(express.json());

app.use("/calc", calc);
app.use("/auth", auth);

// accountingService.signUp("vasya1234", "12345.com", "USER")
// accountingService.signUp("petya1234", "12345.com", "USER")
// accountingService.signUp("vova1234", "12345.com", "USER")
// accountingService.signUp("kolya1234", "12345.com", "ADMIN")
// console.time("SignIn in process")

// const tokenVasya = accountingService.signIn("vasya1234", "12345.com");

// const tokenKolya = accountingService.signIn("kolya12341111", "12345.com");



app.listen(3005, () => {
    console.log("Server started on port 3005");
});
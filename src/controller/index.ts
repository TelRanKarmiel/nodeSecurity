import "dotenv/config";
import accountingService from "../services/AccountingServiceMap.ts";


accountingService.signUp("vasya1234", "12345.com", "USER")
accountingService.signUp("petya1234", "12345.com", "USER")
accountingService.signUp("vova1234", "12345.com", "USER")
accountingService.signUp("kolya1234", "12345.com", "ADMIN")
console.time("SignIn in process")

const tokenVasya = accountingService.signIn("vasya1234", "12345.com");

const tokenKolya = accountingService.signIn("kolya12341111", "12345.com");

console.log("Token for Vasya", tokenVasya);
console.log("Token for Kolya", tokenKolya);
console.log((accountingService as any).getAccounts());

console.clear

console.timeEnd("SignIn in process")



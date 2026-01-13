import { Router } from "express";
import accountingService from "../../services/AccountingServiceMap.ts";

const router = Router();

router.post("/signUp", async (request, response) => {
    const { username, password, role } = request.body;

    try {
        const token = await accountingService.signUp(username, password, role);
        response.json({message: "Account created", token});
    } catch (e) {
        response.status(400).json({ error: e.message });
    }    
});

router.post("/signIn", async (request, response) => {
    const { username, password } = request.body;

    try {
        const token = await accountingService.signIn(username, password);
        response.json({message: "Success", token});
    } catch (e) {
        response.status(400).json({ error: e.message });
    }    
});

router.get("/accounts", async (request, response) => {
  const mid = response.json((accountingService as any).getAccounts());
  return response.json(mid);
});

export default router;
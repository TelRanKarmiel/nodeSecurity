import { Router } from "express";
import { authenticate } from "../auth/auth.ts";

const router = Router();

router.use(authenticate);

router.get("/add/:a/:b", (request, response) => {
    const a = parseInt(request.params.a);
    const b = parseInt(request.params.b);
    response.json({ result: a + b });
});

router.get("/sub/:a/:b", (request, response) => {
    const a = parseInt(request.params.a);
    const b = parseInt(request.params.b);
    response.json({ result: a - b });
}); 

router.get("/mul/:a/:b", (request, response) => {
    const a = parseInt(request.params.a);
    const b = parseInt(request.params.b);
    response.json({ result: a * b });
});

router.get("/div/:a/:b", (request, response) => {
    const a = parseInt(request.params.a);
    const b = parseInt(request.params.b);
    response.json({ result: a / b });
});

export default router;
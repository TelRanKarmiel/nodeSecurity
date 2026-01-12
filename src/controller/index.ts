import "dotenv/config";
import JwtUtil from "../security/JwtUtil.ts";
import { JwtPayload } from "jsonwebtoken";

const token = JwtUtil.getJwt("vasya12345", "USER")


const corruptedToken = token.slice(0, 20) + 'g' + token.slice(21)


try {
    const payload = JwtUtil.verifyToken(corruptedToken);
    console.log(payload);
} catch (e) {
    console.log(e.message);
}




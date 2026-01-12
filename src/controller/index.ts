import "dotenv/config";
import JwtUtil from "../security/JwtUtil.ts";
import { JwtPayload } from "jsonwebtoken";
import { log } from "console";

const token = JwtUtil.getJwt("vasya12345", "USER", )

setTimeout(()=> verification(token), 60000)





function verification(token:string) {
    log(token);
    try {
        const payload = JwtUtil.verifyToken(token);
        console.log(payload);
    } catch (e) {
        console.log(e.name);
    }
}


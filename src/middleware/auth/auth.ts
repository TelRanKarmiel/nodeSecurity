import { Request, Response, NextFunction } from "express";
import JwtUtil from "../../security/JwtUtil.ts";
import { error } from "console";

const BEARER = "bearer";
const AUTHORIZATION = "authorization";
export function authenticate(request:Request &{ user:string, role:string}, response:Response, next:NextFunction) {
    const authHeader = request.header(AUTHORIZATION)
    if (authHeader.startsWith(BEARER)) {
        const token = authHeader.substring(BEARER.length);
        const payload = JwtUtil.verifyToken(token);
        try {
            const payload = JwtUtil.verifyToken(token)
            request.user = payload.sub;
            request.role = payload.role;
        } catch (e) {
            return response.status(401).json(e.name.includes("xpir") ? {"error" : "Expiration"} 
            : {"error" : "Invalid token"}); 
        }
    }
    next();
}

// export function authorization(roles: string[])

//HW: make little express application (ping-pong/ culculator) with methods signIn, signUp
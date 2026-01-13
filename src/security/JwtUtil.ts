import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
}

export default class JwtUtil {

    static getJwt(username:string, role:string):string {
        const expiresIn: any = process.env.TOKEN_EXPIRED_IN || '1h';
        return jwt.sign({role}, JWT_SECRET, {subject: username, expiresIn});
    }


    static verifyToken(token:string):JwtPayload {
        return jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    }
}
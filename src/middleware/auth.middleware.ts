import jwt from "jsonwebtoken";
import { Context, Next } from "koa";

const config = process.env;

const verifyToken = (ctx: Context, next: Next) => {
  const token =
    ctx.request.body.token || ctx.query.token || ctx.headers["x-access-token"];

  if (!token) {
    ctx.status = 403;
    ctx.body = "A token is required for authentication";
    throw new Error("A token is required for authentication");
  }

  try {
    ctx.body = jwt.verify(token, config.TOKEN_KEY || "");
  } catch (err) {
    ctx.status = 401;
    ctx.body = "Invalid Token";
  }
  return next();
};

export default verifyToken;

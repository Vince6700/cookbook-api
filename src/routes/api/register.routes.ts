import Router from "@koa/router";
import { Context } from "koa";
import User from "../../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = new Router();

router.post("/api/register", async (ctx: Context) => {
  try {
    const { first_name, last_name, email, password } = ctx.request.body;

    const oldUser = await User.findOne({ email });

    if (!!oldUser) {
      ctx.status = 409;
      ctx.body = "email already in use";
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // save user token
    user.token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY || "",
      {
        expiresIn: "2h",
      }
    );

    // return new user
    ctx.status = 201;
    ctx.body = user;
  } catch (e) {}
});

router.post("/api/login", async (ctx: Context) => {
  try {
    const { email, password } = ctx.request.body;

    if (!(email && password)) {
      ctx.status = 400;
      ctx.body = "email and passwod required";
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      user.token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY || "",
        {
          expiresIn: "2h",
        }
      );
      ctx.status = 200;
      ctx.body = user;
      return;
    }
    ctx.status = 400;
    ctx.body = "invalid credentials";
  } catch (e) {
    console.log(e);
    ctx.status = 400;
    ctx.body = "error while login";
  }
});

export default router;

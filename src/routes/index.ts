import Router from "@koa/router";
import { Context } from "koa";

const router = new Router();

router.get("/", async (ctx: Context) => {
  ctx.body = {
    status: "success",
    data: "What do you want to cook today ?",
  };
});

export default router;

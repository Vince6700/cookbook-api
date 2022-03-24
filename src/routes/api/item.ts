import Router from "@koa/router";
import { Context } from "koa";

const router = new Router();

router.get("/api/items", async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    status: "success",
    data: [2, 2],
  };
});

export default router;

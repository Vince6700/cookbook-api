import Router from "@koa/router";
import { Context } from "koa";
import List from "../../models/list.model";

const router = new Router();

router.get("/api/lists", async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    status: "success",
    data: await List.find(),
  };
});

router.post("/api/lists", async (ctx: Context) => {
  try {
    const { body } = ctx.request;
    ctx.body = await List.create(body);
    ctx.status = 201;
  } catch (e) {
    ctx.status = 400;
    ctx.body = e;
  }
});

router.delete("/api/lists", async (ctx: Context) => {
  try {
    await List.deleteOne({ name: ctx.request.body.name });
    ctx.status = 201;
  } catch (e) {
    ctx.status = 400;
    ctx.body = e;
  }
});

export default router;

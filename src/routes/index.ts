import Router from "@koa/router";

const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = {
    status: "success",
    data: "What do you want to cook today ?",
  };
});

export default router;

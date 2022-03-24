import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

const app: Koa = new Koa();

app.use(bodyParser());
app.use(
  cors({
    origin: "#",
  })
);
app.use(logger());

const server = app
  .listen(3000, async () => {
    console.log(`Server listening on port: 3000`);
  })
  .on("error", (err) => {
    console.error(err);
  });

export default server;

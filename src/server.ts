import "dotenv/config";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import indexRouter from "./routes/index";
import connect from "./db/mongo";
import listsRouter from "./routes/api/lists.routes";
import registerRouter from "./routes/api/register.routes";

const app: Koa = new Koa();

app.use(bodyParser());
app.use(
  cors({
    origin: "#",
  })
);
app.use(logger());

app.use(indexRouter.routes());
app.use(listsRouter.routes());
app.use(registerRouter.routes());

connect({ db: process.env.MONGO })
  .then(() => console.log("connected to db"))
  .catch((e: Error) => {
    console.error(e);
  });

const server = app
  .listen(process.env.PORT, async () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
  })
  .on("error", (err) => {
    console.error(err);
  });

export default server;

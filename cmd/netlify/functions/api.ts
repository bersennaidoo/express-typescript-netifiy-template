import express, { Request, Response, Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors"
import helmet from "helmet";
import serverless from "serverless-http";
import { UserHandler } from "../../../api/handlers/user_handler";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

const userH: UserHandler = new UserHandler()

const router = Router()

router.get("/users/:id", userH.read)
router.post("/users", userH.create)

app.use("/api/", router);

// custom 404 page
app.use((req: Request, res: Response): void => {
  res.status(404);
  res.send("404");
});

// custom 500 page
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.message);
  res.status(500);
  res.send("500");
});

export const handler = serverless(app);

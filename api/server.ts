import express, { Router } from 'express';
import { ItemController} from "./components/controller/item.controller";
import { createContext } from "./components/service/prisma.service";

const context = createContext();

const itemController = new ItemController(context);

const app = express();

const apiRouter = Router();

apiRouter.get('/item', itemController.getItem)

app.listen(5000)
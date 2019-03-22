import express  from 'express';
import path     from "path";
import lusca    from "lusca";

import * as homeController from "./controllers/home.controller"

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use('/public', express.static('public'));

app.get("/", homeController.index);

export default app;

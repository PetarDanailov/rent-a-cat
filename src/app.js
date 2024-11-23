import "./config/firebaseInit.js"
import page from "./lib/page.js";
import { authMiddleWare } from "./middlewares/authMiddleware.js";
import catsView from "./views/catsView.js";
import homeView from "./views/homeView.js";
import layoutView from "./views/layoutView.js";
import loginView from "./views/loginView.js";
import logoutView from "./views/logoutView.js";
page(authMiddleWare)
page(layoutView)
page('/',homeView)
page('/cats',catsView)
page('/login',loginView)
page('/logout',logoutView)
page()
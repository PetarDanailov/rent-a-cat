import "./config/firebaseInit.js"
import page from "./lib/page.js";
import catsView from "./views/catsView.js";
import homeView from "./views/homeView.js";
import layoutView from "./views/layoutView.js";
page(layoutView )
page('/',homeView)
page('/cats',catsView)
page()
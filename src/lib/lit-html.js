import {render as baseRender,html} from "../../node_modules/lit-html/lit-html.js"
const root = document.getElementById("root");
const render = (template) => baseRender(template,root)  
export {
  render,
  baseRender,
  html,
}
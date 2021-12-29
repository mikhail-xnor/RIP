import { MainPage } from "./pages/main/MainPage.js";
import 'https://code.jquery.com/jquery-3.3.1.min.js'
export default window.jQuery.noConflict(true)
import "./scripts/snowfall.js";

const root = document.getElementById('root');

const mainPage = new MainPage(root)

document.body.setAttribute("style", "background-color: black")

mainPage.render()
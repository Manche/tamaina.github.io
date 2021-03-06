import { fainit } from "./fainit"
import { gototop } from "./gototop"
import onReady from "./onReady"
import { scrolltoshow } from "./scrolltoshow"

import { detectOldBrowser } from "./old-browsers"
import { pjaxinit } from "./pjax"
import { pjaxLoaded } from "./pjax-ready-others"
import { Sidebar } from "./sidebar"

function contentLoaded() {
  fainit()
  scrolltoshow()
  gototop()
}

onReady(contentLoaded)
document.addEventListener("pjax:content", contentLoaded)

new Sidebar()
pjaxinit()

detectOldBrowser()

window.addEventListener("pjax:load", pjaxLoaded)

import React from "react"
import ReactDOM from "react-dom"

// Use a CSS reset to undo browser styling
// import "glamor/reset"
// This is too many kb to add to app lol. I am gonna include
// a css reset file in the HTML like in the old days

import App from "./Containers/App/index"

function render(Comp: any) {
  ReactDOM.render(<Comp />, document.getElementById("app"))
}

render(App)

// Boilerplate for React hot module replacement
if (process.env.NODE_ENV !== "production")
  if (module.hot) {
    console.log("module hot")
    module.hot.accept("./Containers/App/index", () => {
      render(App)
    })
  }

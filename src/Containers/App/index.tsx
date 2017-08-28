import React from "react"
import ReactDOM from "react-dom"
import glamorous from "glamorous"
import { bind } from "decko"

// import { BrowserRouter } from "react-router-dom"

import Button from "../../Elements/Button"

interface Props {}

interface State {
  x: number
}

class App extends React.Component<Props, State> {
  public state = {
    x: 0,
  }

  public render() {
    return (
      // <BrowserRouter>
      <Container>
        Hello, World!{" "}
        {/* <Button onClick={this.onClick}>Increment {this.state.x}</Button> */}
        <Button onClick={this.onClick}>Click Me</Button>
        <div>Number of clicks: {this.state.x}</div>
      </Container>
      // </BrowserRouter>
    )
  }

  @bind
  public onClick() {
    this.setState({
      x: this.state.x + 1,
    })
  }
}

const Container = glamorous.div({
  // fontSize: 30,
  padding: 20,
  backgroundColor: "#EEEEEE",
})

export default App

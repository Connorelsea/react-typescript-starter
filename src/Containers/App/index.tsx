import React from "react"
import ReactDOM from "react-dom"

import { bind } from "decko"
import glamorous from "glamorous"
import { BrowserRouter } from "react-router-dom"

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
      <BrowserRouter>
        <Container>
          Hello, World!{" "}
          <Button onClick={this.onClick}>Increment {this.state.x}</Button>
        </Container>
      </BrowserRouter>
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
  backgroundColor: "green",
  fontSize: 30,
  width: "30%",
})

const Button = glamorous.button({
  backgroundColor: "red",
})

export default App

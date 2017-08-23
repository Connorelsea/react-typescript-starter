import React from "react"
import ReactDOM from "react-dom"
import glamorous from "glamorous"

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        Hello <InnerContainer>World</InnerContainer>
      </Container>
    )
  }
}

const Container = glamorous.div({
  backgroundColor: "green",
  fontSize: 30,
  width: "30%",
})

const InnerContainer = glamorous.div({
  backgroundColor: "red",
})

export default App

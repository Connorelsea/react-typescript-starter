import React from "react"
import ReactDOM from "react-dom"
import glamorous from "glamorous"
import { bind } from "decko"

interface Props {
  onClick: any
}

interface State {}

const colors = {
  gray: [
    "#f8f8f8",
    "#f4f4f4",
    "#eaeaea",
    "#c8c8c8",
    "#a6a6a6",
    "#666666",
    "#3c3c3c",
    "#333333",
    "#212121",
  ],
}

class Button extends React.Component<Props, State> {
  public render() {
    return (
      <Container onClick={this.props.onClick}>
        {this.props.children}
      </Container>
    )
  }
}

export default Button

const Container = glamorous.button(
  {
    border: `1px solid ${colors.gray[2]}`,
    // boxShadow: "0 1px 3px rgba(0,0,0,.15)",
    // backgroundColor: colors.gray[0],
    backgroundColor: "white",
    margin: 10,

    outline: "none",
    borderRadius: 2,
    fontSize: "1rem",
    padding: "5px 13px",
    color: colors.gray[6],
    cursor: "pointer",
    transition: "all 0.2s",

    "&:hover": {
      // backgroundColor: colors.gray[1],
      border: `1px solid ${colors.gray[3]}`,
      color: colors.gray[7],
    },
    "&:active": {
      backgroundColor: colors.gray[1],
      border: `1px solid ${colors.gray[4]}`,
      color: "black",
      // boxShadow: `inset 0 3px 10px ${colors.gray[3]}`,
    },
  }
  // ({ disabled }) => ({
  //   color: disabled && colors.gray[3],
  // })
)

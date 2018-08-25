// layout
import OuterLayout from "./layout/default"

// pages

import Home from "./pages/Home"
import SearchResultView from "./pages/SearchResultView"
import VideoPlayerView from "./pages/VideoPlayerView"

// react
import React, { Component, Fragment } from "react"
import { Route, withRouter } from "react-router-dom"

// styles
import "typeface-roboto"
import "./styles/output/master.css"
import CssBaseline from "@material-ui/core/CssBaseline"

class App extends Component {
  render() {
    return (
      <Fragment>
        <OuterLayout>
          <CssBaseline />
          <Route exact path="/" component={Home} />
          <Route
            path="/searchResultView/:searchWord"
            component={SearchResultView}
          />
          <Route path="/videoPlayerView/:id" component={VideoPlayerView} />
        </OuterLayout>
      </Fragment>
    )
  }
}

export default App

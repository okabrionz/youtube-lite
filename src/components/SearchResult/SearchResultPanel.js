import React from "react"
import PropTypes from "prop-types"
import RPropTypes from "react-router-prop-types"
import { withRouter } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import shortid from "shortid"
import Typography from "@material-ui/core/Typography"
import Card from "./SearchResultCard"

const SearchResultPanel = ({ searchResults, match }) => (
  <Grid id="SearchResultPanel">
    <Grid id="SearchWord">
      <Typography variant="display1" align="center">{`Results for "${
        match.params.searchWord
      }"`}</Typography>
    </Grid>
    <Grid spacing={16} container justify="center">
      {searchResults.map(item => {
        return (
          <Card
            key={shortid.generate()}
            title={item.title}
            author={item.channelTitle}
            description={item.description}
            img={item.thumbnails.medium.url}
            vId={item.id}
          />
        )
      })}
    </Grid>
  </Grid>
)

SearchResultPanel.propTypes = {
  searchResults: PropTypes.array.isRequired,
  match: RPropTypes.match.isRequired,
}

export default withRouter(SearchResultPanel)

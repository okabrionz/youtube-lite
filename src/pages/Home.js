import React from "react"
import Typography from "@material-ui/core/Typography"
import ContentGrid from "../layout/contentPage"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
const Home = ({ isEng = true }) => {
  const captionEng = `No more wasting time on watching random, irrelevant videos on youtube. Feel guilty by looking at the statistics you generate.`
  const captionKor = `유투브에서 아무 비디오나 보다가 시간 낭비하는 건 이제 그만. 여러분이 직접 만들어내는 통계를 보고 죄책감을 느끼세요.`
  const caption = isEng ? captionEng : captionKor
  return <ContentGrid />
}

export default Home

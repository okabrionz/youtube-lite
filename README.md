[![Build status](https://travis-ci.org/9oelM/youtube-lite.svg?branch=master)](https://travis-ci.org/9oelM/youtube-lite)
[![Maintainability](https://api.codeclimate.com/v1/badges/4556af7c8e91ab9c3f37/maintainability)](https://codeclimate.com/github/9oelM/Youtube-Lite/maintainability)

[![youtubel lite logo](./public/youtube-lite-logo-256.png)](https://youtube-lite.js.org)

# Youtube Lite: Youtube that _doesn't_ scale. 
**No ads, no distractions. No recommendations.** Just find the straight way to what you've gotta watch on youtube and quit youtube. Don't fall into temptations to watch more of more irrelevant, time-wasting videos!

## Features

### Light :balloon:
It's really light. It's designed to only bring the core functionalities of youtube. You don't need to login to get your playlist. It remembers your settings and playlist on localStorage. It's going to be there always unless you clear it intendedly.

### Clear :crystal_ball:
You don't see recommendations :books:. You don't see ads. Thus no distractions. Just go straight to hop into the video you want to watch. You are going to be less tempted to watch useless videos. Yay!

### Timer :hourglass:
It will automatically calculate the number of videos and the duration of time you spent watching them and display it to you. The more you watch, the more you are going to feel serious!

### Customizable :surfer:
You could add your own API key in case pre-inserted API key is running out of requests limited per day. You could also hide the stats bar if you are feeling  bothered by that. Lots of more options are coming in next updates.

## Development
youtube-lite uses [`react-app-rewired`](https://github.com/timarney/react-app-rewired). It's a tweaked version of `create-react-app` that would allow you to change webpack configs, so you could play around with it. 

The structure of the project follows a general concensus among react development communities. You will see components and redux codes in `src` folder. 

### Start development server and automatically lint and restart server on change
```
npm start
```

### Test
```
npm test
```

### Lint
```
npm run lint
```

### If you want to `eslint --fix`
Install things globally:
```
npm install -g eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint^5
```
Then you can do
```
eslint --fix
```
otherwise you get an error.

## Contributing 
For now, there is no `CONTRIBUTING.md` guideline. Feel free to submit PRs and issues! There are lots of functionalities that are planned to be added to this project. 

## Thanks to the contributors who made these tools
* [material-ui](https://github.com/mui-org/material-ui)
* [react-youtube](https://github.com/troybetz/react-youtube)
* [redux](https://github.com/reduxjs/redux)
* [redux-persist](https://github.com/rt2zz/redux-persist)
* [react](https://github.com/facebook/react)
* [react-app-rewired](https://github.com/timarney/react-app-rewired)
* [enzyme](https://github.com/airbnb/enzyme)
* [jest](https://github.com/facebook/jest)
* [sass](https://github.com/sass/sass)
* [gulp](https://github.com/gulpjs/gulp)
* [react-youtube](https://github.com/troybetz/react-youtube)
* [youtube-search](https://github.com/MaxGfeller/youtube-search)

## Todo (Alpha)
- [x] Calculate videos and total time watched
- [x] Connect above data with `BottomNav` and `Home` components
- [x] Mark `Channels` page as under construction
- [x] Sync data with localStorage (do not sync `timer` as it does not get stringified)
- [x] Add clear localStorage option in settings
- [x] Black & White Theming
- [x] Fix close & open states for `PlaylistDialog` and add snackbar to confirm action
- [x] Make redux containers for "Add to Playlist" button inside `VideoPlaylists.js`
- [x] Mobile optimization
    - [x] Fix buggy top & bottom nav bars in mobile view  
- [x] Implement loops and shuffles in playlists
    - [x] Change color on clicking loop / shuffle button by using `MuiThemeProvider`. 
    - [x] Delay component render until the video currently playing finishes
- [x] Delete info on time & video watched after 24 hours 
- [ ] Enable dragging on songs in playlist to change the queue or delete them

## Todo (Beta)
- [ ] Refactor
- [ ] Search again if user directly lands on `searchResult` page
- [ ] Search for video information if user directly lands on `videoPlayerView` page
- [ ] Exception handling on edge cases:
    - [ ] On add playlist action, a name that already exists is entered. 
    - [ ] Youtube search result gives an error due to some error (network, API Key, ...)
    - [ ] Wrong API key is entered in `settings`.
    - [ ] An existing name of playlist / video is attempted to be added.
- [ ] Improve the autocomplete search bar (change to a new component with new logic)
- [ ] Add tests with Jest and fix components that cause buggy tests
- [ ] Make desktop version with electron


import C from "./constants"

export const requestSearch = searchWord => ({
  type: C.REQUEST_SEARCH,
  searchWord,
})

export const receiveSearch = searchResults => ({
  type: C.RECEIVE_SEARCH,
  searchResults,
})

export const toggleDrawer = isDrawerOpen => ({
  type: C.TOGGLE_DRAWER,
  isDrawerOpen,
})

export const addToPlaylist = (video, playlistName) => ({
  type: C.ADD_VIDEO,
  video,
  playlistName,
})

export const deleteFromPlaylist = (videoId, playlistName) => ({
  type: C.DELETE_VIDEO,
  videoId,
  playlistName,
})

export const addPlaylist = playlistName => ({
  type: C.ADD_PLAYLIST,
  playlistName,
})

export const deletePlaylist = playlistName => ({
  type: C.DELETE_PLAYLIST,
  playlistName,
})

export const adjustSettings = settings => ({
  type: C.ADJUST_SETTINGS,
  settings,
})

export const watchVideo = () => ({
  type: C.WATCH_VIDEO,
})

export const watchingVideo = () => ({
  type: C.WATCHING_VIDEO,
})

export const startVideo = () => ({
  type: C.START_VIDEO,
})

export const pauseVideo = () => ({
  type: C.PAUSE_VIDEO,
})

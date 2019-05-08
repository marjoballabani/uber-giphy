import axios from 'axios'

const APIkey = "CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6"
const limit = 10
let baseURI = `http://api.giphy.com/v1/gifs/search?q=`

export const fetchImages = (offset, search, loadMore) => ({
  type: "GET_IMAGES",
  payload: axios.get(`${baseURI}${search}&api_key=${APIkey}&limit=${limit}&offset=${offset*limit}`),
  meta: loadMore,
})

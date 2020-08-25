import axios from `axios`
const KEY = 'AIzaSyDGutRNPdTpW1oF8dZTHuemKH9CX-adrUs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

//https://www.googleapis.com/youtube/v3/search?
//key=AIzaSyDGutRNPdTpW1oF8dZTHuemKH9CX-adrUs
//&part=snippet
//&q=javascipt {jsx value}
//&video=video
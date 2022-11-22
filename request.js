const APIKEY = "ba580b8af8495a18cdb6e87947901fc1"

const requests = {
    fetchTrending:`/tending/all/week?api_keys=${APIKEY}
    &language=en-US`,
    
    fetchNetflixOriginals:`/discover/tv?api_keys=${APIKEY}
    &with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}
    language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorroMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default requests;
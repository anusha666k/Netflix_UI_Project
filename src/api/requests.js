const API = 'fc2179362fe274cb42fff266897af68e';
const requests = {
    gettrending : `/trending/all/day?api_key=${API}`,
    fetchNetflixOriginals :`/discover/tv?api_key=${API}&with_networks=213`,
    fetchActionMovies:`/discover/movie?api_key=${API}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API}&with_genres=35`,
    fetchHorrorMovies :`/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies :`/discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentaries :`/discover/movie?api_key=${API}&with_genres=99`,
};

export default requests;
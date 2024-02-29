const API_KEY = import.meta.env.VITE_API_KEY

const requests = [
  {
    title: "Trending",
    endPoint: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "NETFLIX ORIGINALS",
    endPoint: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isVerticalImage: true,
  },
  {
    title: "Top Rated",
    endPoint: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Action",
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Comedy",
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror",
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romance",
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Documentaries",
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
]
export default requests

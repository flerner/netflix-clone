const API_KEY = import.meta.env.VITE_API_KEY
console.log(API_KEY)

const requests = [
  {
    id: 0,
    title: 'Trending',
    endPoint: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: 1,
    title: 'NETFLIX ORIGINALS',
    endPoint: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isVerticalImage: true,
  },
  {
    id: 2,
    title: 'Top Rated',
    endPoint: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    id: 3,
    title: 'Action',
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    id: 4,
    title: 'Comedy',
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: 5,
    title: 'Horror',
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: 6,
    title: 'Romance',
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    id: 7,
    title: 'Documentaries',
    endPoint: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
]
export default requests

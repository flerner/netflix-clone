import instance from "../axios.js"
import { useEffect, useState } from "react"
import { FaChevronRight } from "react-icons/fa";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
function Row({ title, fetchUrl, isVerticalImage }) {
    const [movies, setMovies] = useState([])
    const [movieId, setMovieId] = useState('')
    const IMAGE_PATH_BASE_URL = "https://image.tmdb.org/t/p/original/"
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    const handleImgClick = (movie) => {

        if (movieId) {
            setMovieId('')
        } else {
            movieTrailer(movie.name ? movie.name : movie.title).then((url) => {
                console.log
                const urlParams = new URLSearchParams(new URL(url).search)
                setMovieId(urlParams.get("v"))
            })
        }
    }

    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl p-3 text-[#e5e5e5]">{title}</h1>
            <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide no-scrollbar pl-3">
                {movies.length > 0 ? movies.map((movie) => {

                    return (
                        <img className="w-full max-h-64 object-contain hover:scale-110 hover:z-10 mr-2 transform transition duration-300"
                            src={`${IMAGE_PATH_BASE_URL}${isVerticalImage ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id} onClick={() => handleImgClick(movie)} />
                    )
                }) : <h1>No hay pelis</h1>}
                <button className="bg-[#808080] text-7xl sticky right-0 opacity-5 transform transition duration-300 hover:opacity-35 z-30"><FaChevronRight /></button>
            </div>
            {movieId && <YouTube videoId={movieId} opts={opts} />}
        </div>

    )
}
export default Row
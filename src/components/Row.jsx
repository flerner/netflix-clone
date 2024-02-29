import instance from "../axios.js"
import { useEffect, useState } from "react"

function Row({ title, fetchUrl, isVerticalImage }) {
    const [movies, setMovies] = useState([])
    const IMAGE_PATH_BASE_URL = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl p-3 text-[#e5e5e5]">{title}</h1>
            <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide no-scrollbar p-3">
                {movies.length > 0 ? movies.map((movie) => (
                    <img className="w-full max-h-64 object-contain hover:scale-110 mr-2 transform transition duration-300"
                        src={`${IMAGE_PATH_BASE_URL}${isVerticalImage ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id} />
                )) : <h1>No hay pelis</h1>}
            </div>
        </div>

    )
}
export default Row
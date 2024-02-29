import instance from "../axios.js"
import { useEffect, useState } from "react"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState()
    const IMAGE_PATH_BASE_URL = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            console.log(request.data.results)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])
    return (
        <div className="flex overflow-x-auto overflow-y-hidden scrollbar-hide no-scrollbar p-3">
            {movies && movies.map((movie) => (
                <img className="w-full max-h-64 object-contain hover:scale-110 mr-2 transform transition duration-300"
                    src={`${IMAGE_PATH_BASE_URL}${movie.poster_path}`} alt={movie.name} key={movie.id} />
            ))}
        </div>
    )
}
export default Row
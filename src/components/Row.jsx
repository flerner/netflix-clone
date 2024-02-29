import instance from "../axios.js"
import { useEffect, useState } from "react"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState()
    const IMAGE_PATH_BASE_URL = "https://image.tmdb.org/t/p/w500/"
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            console.log(request.data.results[2].poster_path)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])
    return (

        <div>
            <h2>{title}</h2>
            {movies && movies.map((movie) => (
                <img src={`${IMAGE_PATH_BASE_URL}${movie.poster_path}`} />
            ))}
        </div>
    )
}
export default Row
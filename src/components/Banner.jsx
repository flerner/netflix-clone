import { useState, useEffect } from "react"
import instance from "../axios.js"

function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState({})
    const IMAGE_PATH_BASE_URL = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            console.log(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
        }
        fetchData()
    }, [fetchUrl])
    return (
        <header>
            <div className="relative inline-block">
                {movie && <img src={`${IMAGE_PATH_BASE_URL}${movie.backdrop_path}`} className="w-full block h-max-75" />}
                <div className="absolute z-10 top-1/2 left-1/2 transform translate-x--1/2 translate-y--1/2"></div>
                <div className="absolute z-10 top-1/2 left-20 transform translate-x--1/2 translate-y--1/2">
                    <div className="flex flex-col">
                        <p>{movie.title}</p>
                        <div className="flex">
                            <button className="bg-[#fff] text-black hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play</button>
                            <button className="bg-[#666666] text-white hover:opacity-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Information</button>

                        </div>
                    </div>


                </div>
            </div>

        </header>
    )
}
export default Banner
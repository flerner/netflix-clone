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
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + '...';
    }
    function isObjEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    return (
        !isObjEmpty(movie) &&
        <header>
            <div className="bg-auto max-h-screen" style={{ backgroundSize: "cover", backgroundImage: `url(${IMAGE_PATH_BASE_URL}${movie.backdrop_path})`, }} >
                <div className="ml-20 pt-20">
                    <div className="flex flex-col pl-20 pt-20">
                        <h1 className="text-6xl max-w-60 text-[#fff] pb-5">{movie.title ? movie.title : movie.name}</h1>
                        <p className="max-w-60  text-[#fff]">{truncateText(movie.overview, 200)}</p>
                    </div>
                    <div className="pl-20 pt-10 pb-60">
                        <button className="bg-[#fff] text-black hover:bg-slate-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Play</button>
                        <button className="bg-[#666666] text-white hover:opacity-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More Information</button>

                    </div>
                </div>
                <div className="h-20 w-auto bg-gradient-to-b from-transparent to-[#141414]">


                </div>

            </div>


        </header>
    )
}
export default Banner
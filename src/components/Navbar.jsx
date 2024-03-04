import { useEffect, useState } from "react"

function Navbar() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                setShow(true)
            } else {
                setShow(false)
            }
            return () => window.removeEventListener("scroll")
        })
    }, [])

    return (
        <div className={`transform transition duration-1000 flex max-h-16 fixed top-0 w-full z-20 items-center justify-between ${show && `transform transition duration-1000 bg-[#141414]`}`}>
            <img className="object-cover h-16" src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png" alt="Netflix Logo" />
            <img className="object-cover h-10 mr-5" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile Image" />
        </div>
    )
}
export default Navbar
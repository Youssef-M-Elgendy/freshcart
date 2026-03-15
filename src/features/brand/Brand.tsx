import { faTag, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Brand() {
    return <>
        <header className="bg-blue-500 p-8 text-white shadow-lg">
            <nav className="text-sm opacity-80 mb-4">
                <span className="hover:text-white transition">Home</span>
                <span className="mx-2">/</span>
                <span className="font-bold">Brands</span>
            </nav>

            <div className="flex items-center gap-5">
                <div className="bg-white/20 p-5 rounded-2xl text-2xl backdrop-blur-md">
                    <FontAwesomeIcon icon={faTag}/> 
                </div>

                <div>
                    <h1 className="text-4xl font-bold">Top Brands</h1>
                    <p className="text-lg opacity-90 mt-1">Shop from your favorite brands</p>
                </div>
            </div>
        </header>
    </>
}

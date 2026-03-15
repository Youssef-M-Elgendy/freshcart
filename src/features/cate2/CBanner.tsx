import { faLayerGroup, faTag, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CBanner() {
    return <>
        <header className="bg-primary-500 p-8 text-white shadow-lg">
            <nav className="text-sm opacity-80 mb-4">
                <span className="hover:text-white transition">Home</span>
                <span className="mx-2">/</span>
                <span className="font-bold">categories</span>
            </nav>

            <div className="flex items-center gap-5">
                <div className="bg-white/20 p-5 rounded-2xl text-2xl backdrop-blur-md">
                    <FontAwesomeIcon icon={faLayerGroup}/> 
                </div>

                <div>
                    <h1 className="text-4xl font-bold">All Categories</h1>
                    <p className="text-lg opacity-90 mt-1">Browse our wide range of product categories</p>
                </div>
            </div>
        </header>
    </>
}

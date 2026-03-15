import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGem, faTruck, faShield } from "@fortawesome/free-solid-svg-icons";
import imgRe from "../../../../assets/img/review-author.png"

export default function WelcomeSection() {
    return (
        <section className=" p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800">
                Welcome to <span className="text-green-600">FreshCart</span>
            </h2>

            <p className="text-gray-500 mt-2">
                Join thousands of happy customers who enjoy fresh groceries delivered
                right to their doorstep.
            </p>

            <ul className="mt-6 space-y-4">
                <li className="flex gap-4 items-start">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full">
                        <FontAwesomeIcon icon={faGem} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800">Premium Quality</h4>
                        <p className="text-sm text-gray-500">
                            Premium quality products sourced from trusted suppliers.
                        </p>
                    </div>
                </li>

                <li className="flex gap-4 items-start">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full">
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
                        <p className="text-sm text-gray-500">
                            Same-day delivery available in most areas.
                        </p>
                    </div>
                </li>

                <li className="flex gap-4 items-start">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full">
                        <FontAwesomeIcon icon={faShield} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800">Secure Shopping</h4>
                        <p className="text-sm text-gray-500">
                            Your data and payments are completely secure.
                        </p>
                    </div>
                </li>
            </ul>

            <div className="bg-white mt-6 p-4 rounded-lg border flex gap-3 items-start">
                <Image
                    src={imgRe}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                    <h5 className="font-semibold text-sm text-gray-800">Sarah Johnson</h5>

                    <div className="text-yellow-400 text-xs">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>

                    <p className="text-xs text-gray-500 mt-1 italic">
                        “FreshCart has transformed my shopping experience. The quality of
                        the products is outstanding, and the delivery is always on time.
                        Highly recommend!”
                    </p>
                </div>
            </div>
        </section>
    );
}
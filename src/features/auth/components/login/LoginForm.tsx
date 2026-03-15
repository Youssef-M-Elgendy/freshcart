import Image from "next/image";
import loginImage from "../../../../assets/img/2e5810ff3e-e750761ebcd4ae5907db.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faClock, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function LoginForm() {
    return (
        <div className="">
            <div className=" flex flex-col items-center">

                <div className=" w-full aspect-16/10 shadow-xl   rounded-4xl  items-center">
                    <div className="relative w-full h-full ">
                        <Image
                            src={loginImage}
                            alt="FreshCart"
                            fill
                            className="object-cover rounded-4xl"
                            priority
                        />
                    </div>
                </div>

                <div className="mt-10 text-center flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-[#1a2b3c] mb-4">
                        FreshCart - Your One-Stop Shop for Fresh Products
                    </h1>

                    <p className="text-gray-500 text-lg mb-8">
                        Join thousands of happy customers who trust FreshCart for their daily grocery needs
                    </p>
                </div>

                <div className="w-full flex flex-wrap items-center justify-center gap-8 text-gray-500 font-medium">
                    <span>
                        <FontAwesomeIcon className="text-primary-600 pe-1" icon={faTruck} />
                        Free Delivery
                    </span>
                    <span>
                        <FontAwesomeIcon className="text-primary-600 pe-1" icon={faShieldHalved} />
                        Secure Payment
                    </span>
                    <span>
                        <FontAwesomeIcon className="text-primary-600 pe-1" icon={faClock} />
                        24/7 Support
                    </span>
                </div>
            </div>
        </div>
    );
}

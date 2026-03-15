import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faShieldAlt, faUndo, faHeadset } from "@fortawesome/free-solid-svg-icons";

const features = [
    { icon: faTruck, title: "Free Shipping", desc: "On orders over 500 EGP", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: faShieldAlt, title: "Secure Payment", desc: "100% secure transactions", color: "text-green-500", bg: "bg-green-50" },
    { icon: faUndo, title: "Easy Returns", desc: "14-day return policy", color: "text-orange-500", bg: "bg-orange-50" },
    { icon: faHeadset, title: "24/7 Support", desc: "Dedicated support team", color: "text-purple-500", bg: "bg-purple-50" },
];

export default function PromoBanner() {
    return (
        <div className="bg-gray-100">
            <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 container">
                {features.map((item, index) => (
                    <div key={index} className="flex items-center p-4 rounded-xl shadow-sm bg-white">
                        <div className={`p-3 rounded-full ${item.bg} ${item.color} mr-4`}>
                            <FontAwesomeIcon icon={item.icon} className="text-xl" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
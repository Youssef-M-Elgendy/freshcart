import FeaturedProducts from "../components/FeaturesProgucts";
import OfBanner from "../components/OfBanner";
import OurCategories from "../components/OurCategorise";
import PromoBanner from "../components/PromoBanner";
import Slider from "../components/Slider";

export default function HomeScreen() {
    return <>
        <Slider/>
        <PromoBanner/>
        <OurCategories/>
        <OfBanner/>
        <div className="container flex flex-col justify-center items-center">
        <FeaturedProducts/> 
        </div>
    </>
}

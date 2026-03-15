import HeroForget from "@/features/auth/components/forgetPassword/HeroForget";
import NewPassword from "@/features/auth/components/forgetPassword/NewPassword";

export default function page() {
    return (
        <div className="flex content-center flex-col lg:flex-row items-center py-7 container gap-15">
            <HeroForget />
            <NewPassword />
        </div>
    )
}

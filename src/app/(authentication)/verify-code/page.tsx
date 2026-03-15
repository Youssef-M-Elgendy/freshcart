import HeroForget from "@/features/auth/components/forgetPassword/HeroForget";
import VerifyCode from "@/features/auth/components/forgetPassword/VerifyCode";

export default function code() {
    return <>
        <div className="flex content-center flex-col lg:flex-row items-center py-7 container gap-15">
            <HeroForget />
            <VerifyCode/>
        </div>
    </>
}

import HeroForget from "@/features/auth/components/forgetPassword/HeroForget";
import ForgetPassword from "@/features/auth/components/forgetPassword/ForgetPassword";

export default function ForgotPassword() {
  return <>
  <div className="flex content-center items-center flex-col lg:flex-row py-7 container gap-15">
    <HeroForget/>
    <ForgetPassword/>
  </div>
  </>
}

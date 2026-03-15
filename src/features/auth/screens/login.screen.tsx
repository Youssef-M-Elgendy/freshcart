import LoginForm from "../components/login/LoginForm";
import LoginHero from "../components/login/LoginHero";

export default function LoginScreen() {
    return <>
        <div className="flex container flex-col lg:flex-row gap-15 my-15 ">
            <LoginForm />
            <LoginHero />
        </div>
    </>
}

import Hero from "../components/signup/Hero"
import Form from "../components/signup/Form"

export default function signupScreen() {
    return <>
        <div className="py-12 bg-gray-100">
            <div className=" container grid lg:grid-cols-2">
                <Hero />
                <Form />
            </div>
        </div>
    </>
}

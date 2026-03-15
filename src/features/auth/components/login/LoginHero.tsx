"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import loginAction from "../../server/login.actions";
import { toast } from "react-toastify";
import { setToken } from "../../server/auth.actions";
import { setAuthInfo } from "../../store/auth.slice";
import { useDispatch } from "react-redux";

export default function LoginHero() {

    const router = useRouter();
    const didpatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<LoginFormValues>({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        resolver: zodResolver(loginSchema),
        mode: "onSubmit",
        reValidateMode: "onChange"
    });

    const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
        try {
            const response = await loginAction(values);
            if (response.success) {

                await setToken(response.data.token, values.rememberMe)
                didpatch(setAuthInfo({ isAuthenticated: true, userInfo: response.data.user }))
                toast.success(response?.message);
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            } else {
                if (response?.errors) {
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof LoginFormValues, {
                            message: response.errors[key]
                        });
                    });
                } else {
                    toast.error(response.message);
                }
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <div className=" flex items-center justify-center">
                <div className="w-full bg-white rounded-2xl shadow p-8">

                    <h1 className="text-center text-3xl font-bold mb-2">
                        <span className="text-green-600">Fresh</span>
                        <span className="text-gray-800">Cart</span>
                    </h1>

                    <h2 className="text-center text-xl font-semibold text-gray-800 mb-1">
                        Welcome Back!
                    </h2>

                    <p className="text-center text-gray-500 mb-6 text-sm">
                        Sign in to continue your fresh shopping experience
                    </p>

                    <div className="space-y-3 mb-6">
                        <button type="button" className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                            <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                            Continue with Google
                        </button>

                        <button type="button" className="w-full border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                            <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                            Continue with Facebook
                        </button>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-xs text-gray-500 uppercase">
                            Or continue with email
                        </span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Email Address
                            </label>

                            <div className="relative mt-1">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    {...register("email")}
                                />
                            </div>

                            {errors.email && (
                                <p className="text-red-500 mt-1">
                                    *{errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <label className="font-medium text-gray-700">
                                    Password
                                </label>

                                <Link
                                    href="/forget-password"
                                    className="text-green-600 hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <div className="relative">
                                <FontAwesomeIcon
                                    icon={faLock}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full border rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    {...register("password")}
                                />
                            </div>

                            {errors.password && (
                                <p className="text-red-500 mt-1">
                                    *{errors.password.message}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                className="accent-green-600"
                                {...register("rememberMe")}
                            />
                            Keep me signed in
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="border-t mt-6 pt-6 text-center text-sm text-gray-600">
                        New to FreshCart?{" "}
                        <Link href="/signup" className="text-green-600 font-medium">
                            Create an account
                        </Link>
                    </div>

                    <div className="flex justify-center gap-6 text-xs text-gray-500 mt-4">
                        <span>
                            <FontAwesomeIcon icon={faLock} className="mr-1" />
                            SSL Secured
                        </span>

                        <span>
                            <FontAwesomeIcon icon={faUsers} className="mr-1" />
                            50K+ Users
                        </span>

                        <span>
                            <FontAwesomeIcon icon={faStar} className="mr-1" />
                            4.9 Rating
                        </span>
                    </div>

                </div>
            </div>
        </>
    );
}
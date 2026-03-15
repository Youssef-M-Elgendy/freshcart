"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type FormValues = {
    email: string;
};

export default function ForgetPassword() {
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors } } = useForm<FormValues>();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: FormValues) => {
        setLoading(true);
        try {
            await axios.post(
                "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
                { email: values.email }
            );

            localStorage.setItem("resetEmail", values.email);
            router.push("/verify-code");

        } catch (error: any) {
            setError("email", { message: error?.response?.data?.message || "Email not allowed" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="p-8 rounded-xl shadow w-full h-125">

                <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    Forgot Password?
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    No worries, we'll send you a reset code
                </p>

                <div className="flex items-center justify-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-md">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>

                    <div className="w-16 h-0.5 bg-gray-200"></div>

                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                        <FontAwesomeIcon icon={faKey} />
                    </div>

                    <div className="w-16 h-0.5 bg-gray-200"></div>

                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>

                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                                {...register("email", { required: "Email required" })}
                            />
                        </div>

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <button
                        disabled={loading}
                        className="btn w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg"
                    >
                        {loading ? "Sending..." : "Send Reset Code"}
                    </button>

                </form>

                <div className="text-center mt-6">
                    <button
                        onClick={() => router.push("/signin")}
                        className="text-primary-600 font-medium hover:underline flex items-center justify-center gap-2 mx-auto"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                        Back to Sign In
                    </button>
                </div>

            </div>
        </div>
    );
}

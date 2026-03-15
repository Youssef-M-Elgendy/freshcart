"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faKey, faLock, faShieldHalved, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function VerifyCode() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";
    const router = useRouter();

    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [error, setError] = useState("");
    const [resendSuccess, setResendSuccess] = useState("");

    const handleVerify = async () => {
        if (code.length < 4 || code.length > 6) {
            setError("Please enter a code between 4 and 6 digits");
            return;
        }
        setLoading(true);
        setError("");
        try {
            await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
                resetCode: code
            });
            router.push("/reset-password");
        } catch (err: any) {
            setError(err?.response?.data?.message || "Invalid code");
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (!email) return;
        setResendLoading(true);
        setError("");
        setResendSuccess("");
        try {
            await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
                email: email
            });
            setResendSuccess("Code sent again successfully!");
        } catch (err: any) {
            setError(err?.response?.data?.message || "Failed to resend code");
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <div className="w-full ">
            <div className="p-8 rounded-xl shadow w-full h-140 flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-center text-gray-900 ">
                    Check Your Email
                </h2>

                <p className="text-center text-gray-500 ">
                    Enter the code sent to your email
                </p>

                <div className="flex items-center justify-center ">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-md">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>

                    <div className="w-16 h-0.5 bg-primary-600"></div>

                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-md">
                        <FontAwesomeIcon icon={faKey} />
                    </div>

                    <div className="w-16 h-0.5 bg-gray-200"></div>

                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center">
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                </div>

                <div className="">
                    <label className="block text-sm font-medium text-gray-700 ">
                        Verification Code
                    </label>

                    <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                            <FontAwesomeIcon icon={faShieldHalved} />
                        </span>

                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-center font-mono transition"
                            placeholder="• • • • • •"
                            maxLength={6}
                        />
                    </div>
                </div>

                {error && (
                    <p className="text-red-500 text-sm  text-center">
                        {error}
                    </p>
                )}

                {resendSuccess && (
                    <p className="text-green-500 text-sm  text-center">
                        {resendSuccess}
                    </p>
                )}

                <p className="text-sm text-gray-600  text-center">
                    Didn't receive the code?{" "}
                    <button
                        onClick={handleResend}
                        disabled={resendLoading}
                        className="text-primary-600 font-bold hover:underline"
                    >
                        {resendLoading ? "Resending..." : "Resend Code"}
                    </button>
                </p>

                <button
                    onClick={handleVerify}
                    disabled={loading}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white btn py-2 rounded-lg transition"
                >
                    {loading ? "Verifying..." : "Verify Code"}
                </button>

                <button
                    onClick={() => router.push("/forget-password")}
                    className="mt-6 text-gray-500 hover:text-primary-500 flex items-center justify-center gap-2 mx-auto"
                >
                    <FontAwesomeIcon icon={faArrowLeft} size="sm" />
                    Change email address
                </button>
            </div>
        </div>
    );
}
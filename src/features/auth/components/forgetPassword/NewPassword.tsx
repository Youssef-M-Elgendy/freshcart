"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function NewPassword() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem("resetEmail") || "";
        setEmail(storedEmail);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError("");

        try {
            await axios.put(
                "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
                {
                    email: email,
                    newPassword: password
                }
            );

            localStorage.removeItem("resetEmail");
            router.push("/");

        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="p-8 rounded-xl shadow h-125">

                <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    Create New Password
                </h2>

                <p className="text-center text-gray-500 mb-8">
                    Your new password must be different from previous passwords
                </p>

                <div className="flex items-center justify-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-md">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>

                    <div className="w-16 h-0.5 bg-primary-600"></div>

                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-md">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>

                    <div className="w-16 h-0.5 bg-primary-600"></div>

                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-md">
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                        </label>

                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FontAwesomeIcon icon={faLock} />
                            </span>

                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                                placeholder="Enter new password"
                            />

                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">
                                <FontAwesomeIcon icon={faLock} />
                            </span>

                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                                placeholder="Confirm new password"
                            />

                            <span
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                            >
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">
                            {error}
                        </p>
                    )}

                    <button
                        disabled={loading}
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 rounded-lg transition duration-200 mt-4"
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>

                </form>

            </div>
        </div>
    );
}
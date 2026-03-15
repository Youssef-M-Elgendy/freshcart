"use client";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolve } from "path";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupFormValues, signupSchema } from "../../schemas/signup.scema";
import signupAction from "../../server/singup.actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Form() {
    const router = useRouter()


    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<SignupFormValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
            terms: false,
        },
        resolver: zodResolver(signupSchema),

        mode: 'onSubmit',
        reValidateMode: 'onChange',
    })


    const onSubmit: SubmitHandler<SignupFormValues> = async (values) => {
        try {
            const response = await signupAction(values);

            if (response?.success) {
                toast.success(response?.message)
                setTimeout(() => {
                    router.push('/login')
                }, 2000);
            } else {
                if (response?.errors) {
                    Object.keys(response.errors).forEach((key) => {
                        setError(key as keyof SignupFormValues, { message: response.errors[key] })
                    })
                }
            }
        }
        catch (error) {
        }
    };

    return <>
        <div className="flex items-center justify-center py-4 ">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Create Your Account
                    </h2>
                    <p className="text-gray-600">
                        Start your fresh journey with us today
                    </p>
                </div>

                <div className="flex gap-4 mb-6">
                    <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3 hover:bg-primary-400 duration-200 hover:text-white transition-colors hover:*:text-white">
                        <FontAwesomeIcon className="text-red-600 " icon={faGoogle} />
                        <span className=" font-medium">Google</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-3  hover:bg-primary-400 duration-200 hover:text-white transition-colors hover:*:text-white">
                        <FontAwesomeIcon className="text-blue-600" icon={faFacebook} />
                        <span className="text-gray-700 font-medium">Facebook</span>
                    </button>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">or</span>
                    </div>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="ali"
                            className="  form-control w-full"
                            {...register("name")}
                        />
                        {errors.name && (<p className="text-red-500 mt--0.5">*{errors.name.message}</p>)}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email*
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="olij@example.com"
                            className="  form-control w-full"
                            {...register("email")}
                        />
                        {errors.email && (<p className="text-red-500 mt--0.5">*{errors.email.message}</p>)}

                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password*
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="create a strong password"
                            className=" form-control w-full"
                            {...register("password")}
                        />

                        <div className="mt-2">
                            <div className=" flex items-center gap-2">
                                <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-red-500"></div>
                                </div>
                                <span className="text-xs text-gray-500">
                                    weak
                                </span>
                            </div>
                            {errors.password ? (<p className="text-red-500 mt--0.5">*{errors.password.message}</p>) : (
                                <p className="text-xs text-red-500 mt-1">
                                    Must be at least 8 characters with numbers and symbols
                                </p>)}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password*
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="confirm your password"
                            className="  form-control w-full"
                            {...register("rePassword")}

                        />
                        {errors.rePassword && (<p className="text-red-500 mt--0.5">*{errors.rePassword.message}</p>)}

                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number*
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="+1234 567 8900"
                            className="   form-control w-full"
                            {...register("phone")}

                        />
                        {errors.phone && (<p className="text-red-500 mt--0.5">*{errors.phone.message}</p>)}

                    </div>

                    <div className="flex gap-2 items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className=" accent-primary-600 size-4"
                            {...register("terms")}

                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the <a href="/terms" className="text-green-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-green-600 hover:underline">Privacy Policy</a>
                        </label>
                    </div>
                    {errors.terms && (<p className="text-red-500 mt--0.5">*{errors.terms.message}</p>)}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="  btn bg-primary-600 text-white hover:bg-primary-700 cursor-pointer disabled:cursor-not-allowed w-full"
                    >
                        {isSubmitting ? (
                            <>
                                <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                                <span>Creating an account</span>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                                <span>Create My Account</span>
                            </>
                        )}
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-green-600/70 hover:underline font-medium">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    </>
}

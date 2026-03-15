import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShieldHalved, faLock } from '@fortawesome/free-solid-svg-icons';

export default function HeroForget() {
    return <>
        <div className="flex flex-col items-center  w-full text-center ">

            <div className="bg-primary-50 rounded-3xl w-full h-96 mb-8 flex items-center justify-center relative shadow-sm">
                <div className="flex gap-4 items-center">
                    <div className="bg-white p-3 rounded-2xl shadow-sm text-primary-500 w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </div>
                    <div className="bg-white p-5 rounded-2xl shadow-lg text-primary-600 w-20 h-20 flex items-center justify-center">
                        <FontAwesomeIcon icon={faLock} size="2x" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-sm text-primary-500 w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon icon={faShieldHalved} size="lg" />
                    </div>
                </div>

                <div className="flex gap-2 absolute bottom-6">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-slate-900 mb-4">Reset Your Password</h1>
            <p className="text-slate-500 mb-8 leading-relaxed w-[75%]">
                Don't worry, it happens to the best of us. We'll help you get back into your account in no time.
            </p>

            <div className="flex justify-center gap-6 text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary-600" /> Email Verification
                </div>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-primary-600" /> Secure Reset
                </div>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLock} className="text-primary-600" /> Encrypted
                </div>
            </div>
        </div>
    </>
}

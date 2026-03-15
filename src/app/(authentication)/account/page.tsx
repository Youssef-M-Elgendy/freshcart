import React from 'react'

export default function page() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100 my-5">
    <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600">
            <i className="fas fa-lock"></i>
        </div>
        <div>
            <h2 className="text-lg font-bold text-gray-800">Change Password</h2>
            <p className="text-sm text-gray-500">Update your account password</p>
        </div>
    </div>

    <form className="space-y-4">
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Current Password</label>
            <div className="relative">
                <input
                    type="password"
                    placeholder="Enter your current password"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-gray-300"
                />
                <i className="fas fa-eye absolute right-3 top-4 text-gray-400"></i>
            </div>
        </div>

        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
            <div className="relative">
                <input
                    type="password"
                    placeholder="Enter your new password"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-gray-300"
                />
                <i className="fas fa-eye absolute right-3 top-4 text-gray-400"></i>
            </div>
            <p className="text-xs text-gray-400 mt-1">Must be at least 6 characters</p>
        </div>

        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm New Password</label>
            <div className="relative">
                <input
                    type="password"
                    placeholder="Confirm your new password"
                    className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-gray-300"
                />
                <i className="fas fa-eye absolute right-3 top-4 text-gray-400"></i>
            </div>
        </div>

        <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 mt-2">
            <i className="fas fa-lock text-sm"></i>
            Change Password
        </button>
    </form>
</div>
  )
}

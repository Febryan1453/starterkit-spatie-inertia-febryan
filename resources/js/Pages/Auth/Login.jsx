import { Head } from '@inertiajs/inertia-react';
import React from 'react';

export default function Login() {
  return (
    <div>
      <Head title="Login" />
      <div className="font-poppins min-h-screen px-3 flex items-center justify-center bg-keren relative">
        <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md relative">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Welcome Back!</h1>
          <p className="text-gray-600 mb-5 text-center">Please login to your account</p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

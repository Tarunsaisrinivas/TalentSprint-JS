import React, { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        alert(`Logged in as ${email}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50">
            <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm border border-orange-100">
                <h2 className="text-2xl font-semibold text-center text-orange-600 mb-6">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-orange-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-orange-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-4">
                    Don’t have an account?{" "}
                    <a href="#" className="text-orange-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;
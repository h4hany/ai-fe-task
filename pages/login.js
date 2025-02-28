import {useState} from 'react';
import {useRouter} from 'next/router';
import {login} from "@/services/authService";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(
                username,
                password,
            );
            if (response.access_token) {
                localStorage.setItem('token', response.access_token);
                router.push('/my-books');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-4xl font-bold text-white mb-8 text-center">
                    BookAI Portal
                </h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-lg bg-black/50 text-white border border-blue-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-lg bg-black/50 text-white border border-blue-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

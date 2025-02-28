import Link from 'next/link';

export default function Layout({children}) {

    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900">
            <nav
                className="fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-8">BookAI</h2>
                    <ul className="space-y-4">
                        <li>
                            <Link href="/search"
                                  className="text-gray-300 hover:text-white block py-2 px-4 rounded transition-all hover:bg-blue-600">
                                Search Books
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-books"
                                  className="text-gray-300 hover:text-white block py-2 px-4 rounded transition-all hover:bg-blue-600">
                                My Books
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="ml-64 p-8">
                {children}
            </main>
        </div>
    );
}

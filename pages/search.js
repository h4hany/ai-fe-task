import {useState} from 'react';
import Layout from '../components/Layout';
import {Book} from "@/models/Book";
import BookCard from "@/components/BookCard";
import {useRouter} from "next/router";
import {searchBook} from "@/services/bookService";

export default function Search() {
    const [bookId, setBookId] = useState('');
    const [book, setBook] = useState(null);
    const router = useRouter();

    const handleRedirect = (id) => {
        router.push(`/analysis/${id}`);

    };
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await searchBook(bookId)
            if (response) {
                const selectedBook = Book.fromJSON(response)

                setBook(selectedBook)
            }
        } catch (error) {
            console.error('error:', error);
        }
    };

    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Search Books</h1>
                <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl mb-8 ">
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Enter Book ID"
                            className="flex-1 px-4 py-3 rounded-lg bg-black/50 text-white border border-blue-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                            value={bookId}
                            onChange={(e) => setBookId(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            Search
                        </button>
                    </form>

                </div>

                <div className="grid ">
                    {book && <BookCard key={book.id} book={book} handleRedirect={handleRedirect}/>}
                </div>
            </div>
        </Layout>
    );
}

import Layout from '../components/Layout';
import BookCard from '../components/BookCard';
import {useEffect, useState} from "react";
import {listBook} from "@/services/bookService";

import {useRouter} from "next/router";
import Loading from "@/components/loading";
import Errors from "@/components/error";

export default function MyBooks() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const bookData = await listBook(); // Call the async function correctly
                setBooks(bookData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks(); // Invoke the async function


    }, []);
    const handleRedirect = (id) => {
        router.push(`/analysis/${id}`);

    };
    if (loading) return <Loading/>;
    if (error) return <Errors err={error}/>;
    return (
        <Layout>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">My Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} handleRedirect={handleRedirect}/>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

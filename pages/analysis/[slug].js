import {useEffect, useState} from 'react';
import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import {fetchBookAnalysis} from "@/services/bookService";
import Loading from "@/components/loading";
import Errors from "@/components/error";


export default function Analysis() {
    const [data, setData] = useState(null);
    const router = useRouter();
    const {slug} = router.query;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {


        const fetchBooks = async (slug) => {

            try {
                const bookData = await fetchBookAnalysis(slug);
                setData(bookData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }

        };
        if (slug) {
            fetchBooks(slug);
        }
    }, [slug]);
    if (loading) return <Loading/>;
    if (error) return <Errors err={error}/>;
    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Book Analysis</h1>
                <div className="grid gap-6">

                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-4">Title</h2>
                        <div className="text-gray-300">
                            {data && data.title}
                        </div>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-4">Key Characters</h2>
                        <div className="text-gray-300" style={{whiteSpace: "pre-line"}}>
                            <ul>
                                {data.characters.map((charachter, index) => (
                                    <li key={index}>{charachter}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-4">Language Detection</h2>
                        <div className="text-gray-300">
                            {data.language}
                        </div>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-4">Sentiment Analysis</h2>
                        <div className="text-gray-300" style={{whiteSpace: "pre-line"}}>
                            <ul>
                                {data.sentiment.map((charachter, index) => (
                                    <li key={index}>{charachter}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-4"> Summary</h2>
                        <div className="text-gray-300" style={{whiteSpace: "pre-line"}}>
                            <ul>
                                {data.plot_summary.map((charachter, index) => (
                                    <li key={index}>{charachter}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

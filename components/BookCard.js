import {useState} from 'react';
import {BookOpenIcon, UserIcon, IdentificationIcon} from '@heroicons/react/24/outline';

export default function BookCard({book, handleRedirect}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = () => {
        handleRedirect(book.id); // Passing the book data to the parent component
    };
    return (
        <div
            className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/10 hover:border-blue-500/50">
            <div className="flex flex-col gap-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white truncate flex-1">
                        {book.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-xs text-white">
                        ID: {book.id}
                    </span>
                </div>

                {/* Book Details */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                        <UserIcon className="h-5 w-5"/>
                        <span>{book.author}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                        <IdentificationIcon className="h-5 w-5"/>
                        <span>Gutenberg ID: {book.gutenberg_id}</span>
                    </div>
                </div>

                {/* Content Preview */}
                <div className="mt-4">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                    >
                        <BookOpenIcon className="h-5 w-5"/>
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>

                    {isExpanded && (
                        <p className="mt-3 text-gray-300 text-sm line-clamp-6">
                            {book.content}
                        </p>
                    )}
                </div>

                <div className="flex gap-3 mt-4">
                    <button
                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 text-sm"
                        onClick={handleClick}>
                        Analyze
                    </button>

                </div>
            </div>
        </div>
    );
}

export default function Subscribe(){
    return(
        <a href="https://www.youtube.com/@LAISSHOW" target="_blank">
            <button
            className="flex items-center gap-2 px-6 my-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow transition duration-200 mx-auto animate-bounce"
        >
            <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M10 15V9l5 3-5 3zm12-3c0-2.21-.18-3.63-.51-4.89-.34-1.3-1.34-2.3-2.64-2.64C17.63 3.18 16.21 3 14 3s-3.63.18-4.89.51c-1.3.34-2.3 1.34-2.64 2.64C3.18 6.37 3 7.79 3 10s.18 3.63.51 4.89c.34 1.3 1.34 2.3 2.64 2.64C6.37 20.82 7.79 21 10 21s3.63-.18 4.89-.51c1.3-.34 2.3-1.34 2.64-2.64.33-1.26.51-2.68.51-4.89z"/>
            </svg>
            Subscribe
        </button>
        </a>
    );
}
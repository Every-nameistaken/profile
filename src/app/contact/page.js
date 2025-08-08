import Footer from "@/component/Footer";
import Header from "@/component/Header";

export default function ContactPage() {
    return (
        <div className=" mx-auto ">
            <Header />
           <div className="p-5 ">
                 <h1 className="text-3xl font-bold mb-6 text-center">Contact John Doe</h1>
            <div className="flex sm:align-middle flex-wrap gap-8">
                {/* Google Map */}
                <div className="flex-1 min-w-[300px]">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA&output=embed"
                        width="100%"
                        height="300"
                        className="rounded shadow"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="mt-4">
                        <p className="font-semibold">Address:</p>
                        <p>1600 Amphitheatre Parkway, Mountain View, CA</p>
                        <p className="font-semibold mt-2">Phone:</p>
                        <p>(123) 456-7890</p>
                    </div>
                </div>
                {/* Contact Form */}
                <form className="flex-1 min-w-[300px] bg-white rounded shadow p-6 space-y-4">
                    <div>
                        <label className="block font-medium mb-1" htmlFor="name">Name</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1" htmlFor="message">Message</label>
                        <textarea
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
                            id="message"
                            name="message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
}
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
           <div className="p-5">
                 <h1 className="text-4xl font-bold mt-16 mb-6 text-center bg-gradient-to-br from-gray-800 to-gray-400 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Contact Us:</h1>
            <div>
                {/* Google Map */}
                <div className="flex-1 min-w-[300px] rounded-b-md">
                   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8175566112373!2d4.946605975007425!3d8.017741192008646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037e708108e8abf%3A0x378fbfcb90845763!2sFederal%20University%20of%20Health%20Sciences%20Ila-Orangun!5e0!3m2!1sen!2sng!4v1770682559739!5m2!1sen!2sng" width={"100%"} height={"350"} className="rounded-md border-0" loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>

                    <div className="my-15 pb-36">
                        <p className="font-semibold text-lg text-gray-700 dark:text-gray-300">Address:</p>
                        <p className="font-serif text-gray-600 dark:text-gray-400">KM 4 Ora Rd, Ila Orangun 234101, Osun State Nigeria</p>
                        <p className="font-semibold my-2 text-gray-700 dark:text-gray-300">Email:</p>
                        <p className="mb-5 font-serif text-gray-600 dark:text-gray-400"><a href="mailto:ayorkunle.dada@gmail.com" className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors">ayorkunle.dada@gmail.com</a></p>

                        <p className="font-semibold my-2 text-gray-700 dark:text-gray-300">Phone:</p>
                        <p className="mb-5 font-serif text-gray-600 dark:text-gray-400">+2349069783939</p>

                        <a href="https://supme.me/p/Pb0MFW" target="_blank" rel="noopener noreferrer">
                            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                            <FaEnvelope />
                            Leave a message
                        </button>
                        </a>
                        
                    </div>
                    
                </div>
                
            </div>
            </div>
            <Footer />
        </div>
    );
}
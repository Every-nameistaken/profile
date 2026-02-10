import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
    return (
        <div className=" mx-auto ">
            <Header />
           <div className="p-5 dark:bg-white">
                 <h1 className="text-4xl font-bold mt-16 mb-6 text-center bg-gradient-to-br from-gray-800 to-gray-400 bg-clip-text text-transparent ">Contact Us:</h1>
            <div>
                {/* Google Map */}
                <div className="flex-1 min-w-[300px] rounded-b-md">
                   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8175566112373!2d4.946605975007425!3d8.017741192008646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037e708108e8abf%3A0x378fbfcb90845763!2sFederal%20University%20of%20Health%20Sciences%20Ila-Orangun!5e0!3m2!1sen!2sng!4v1770682559739!5m2!1sen!2sng" width={"100%"} height={"350"} className="rounded-md border-0"  loading={"lazy"} referrerpolicy={"no-referrer-when-downgrade"}></iframe>


                    <div className="my-15 pb-36">
                        <p className="font-semibold text-lg text-gray-700">Address:</p>
                        <p className="font-serif text-gray-600">KM 4 Ora Rd, Ila Orangun 234101, Osun</p>
                        <p className="font-semibold my-2 text-gray-700">Email:</p>
                        <p className="mb-5 font-serif text-gray-600"><a href="mailto:ayorkunle.dada@gmail.com">ayorkunle.dada@gmail.com</a></p>

                        <p className="font-semibold my-2 text-gray-700">Phone:</p>
                        <p className="mb-5 font-serif text-gray-600">+2349069783939</p>
                        
                    </div>
                    
                </div>
                {/* Contact Form */}
                
            </div>
            </div>
            <Footer />
        </div>
    );
}
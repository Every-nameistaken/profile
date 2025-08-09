import Footer from "@/component/Footer";
import Header from "@/component/Header";

export default function ContactPage() {
    return (
        <div className=" mx-auto ">
            <Header />
           <div className="p-5 dark:bg-white">
                 <h1 className="text-4xl font-bold mt-16 mb-6 text-center bg-gradient-to-br from-gray-800 to-gray-400 bg-clip-text text-transparent ">Contact Us:</h1>
            <div>
                {/* Google Map */}
                <div className="flex-1 min-w-[300px] rounded-b-md">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8830297217!2d-118.74138205907403!3d34.02003919141475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1754680039781!5m2!1sen!2sus" width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" className="rounded-md" referrerPolicy="no-referrer-when-downgrade"></iframe>


                    <div className="my-15">
                        <p className="font-semibold text-lg text-gray-700">Address:</p>
                        <p className="font-serif">1600 Amphitheatre Parkway, Mountain View, CA</p>
                        <p className="font-semibold my-2 text-gray-700">Email:</p>
                        <p className="mb-5 font-serif"><a href="mailto:aaronrichee12@outlook.com">aaronrichee12@outlook.com</a></p>
                        
                    </div>
                </div>
                {/* Contact Form */}
                
            </div>
            </div>
            <Footer />
        </div>
    );
}
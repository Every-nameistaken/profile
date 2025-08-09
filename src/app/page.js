import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Subscribe from "@/component/Subscribe";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      <Header />
      {/* <div>
        <h1 className="text-center text-4xl py-4 font-semibold font-serif bg-gradient-to-br from-purple-700 to-gray-400 bg-clip-text text-transparent">Welcome to my blog</h1>
      </div> */}
      <div className="dark:bg-white">
        <h1 className="text-center text-4xl pb-4 pt-20 font-semibold font-serif bg-gradient-to-br from-gray-700 to-gray-400 bg-clip-text text-transparent"></h1>
        <h1 className="text-center text-3xl font-sans text-gray-600">I am Duncan, check out my youtube channel at 
          
        </h1>
        <h1 className="text-center text-3xl font-sans py-5 animate-pulse hover:underline  decoration-3 text-gray-600" > <a  href="https://www.youtube.com/@LAISSHOW" target="_blank">LifeAsItIs!</a></h1>

        <div className="text-center pb-[700px]">
        <Subscribe />
        </div>

      </div>

      <Footer />
      
    </div>
  );
}

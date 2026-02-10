import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Subscribe from "@/component/Subscribe";
import Carousel from "@/component/Carousel";
import Slides from "@/component/Slides";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      <Header />
      {/* <div>
        <h1 className="text-center text-4xl py-4 font-semibold font-serif bg-gradient-to-br from-purple-700 to-gray-400 bg-clip-text text-transparent">Welcome to my blog</h1>
      </div> */}
      <div className="dark:bg-white">
        <h1 className="text-center text-2xl py-4 pt-20 font-serif bg-gradient-to-br from-gray-700 to-gray-400 bg-clip-text text-transparent"></h1>
        <h1 className="text-center text-xl font-sans text-gray-600">

          Hi, i’m <span className="font-bold">Dada Ayokunle Samuel</span>, a passionate fullstack developer with a love for crafting functional, accessible, and visually appealing web applications. I enjoy turning ideas into real-world digital experiences using modern web technologies.
          
        </h1>
        

        <div className="text-center ">
        <Subscribe />
        </div>

        <div className="py-12 px-4">
          <Carousel />
          <br />
          <br />
          <br />
          <Slides />
        </div>
      </div>

      <Footer />
      
    </div>
  );
}

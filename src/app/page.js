import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      <Header />
      <div>
        <h1 className="text-center text-4xl py-4 font-semibold font-serif bg-gradient-to-br from-purple-700 to-gray-400 bg-clip-text text-transparent">Welcome to my blog</h1>
      </div>
      <Footer />
      
    </div>
  );
}

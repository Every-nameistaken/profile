import Footer from "@/component/Footer";
import Header from "@/component/Header";

export default function About() {
  return (
    <div>
      <Header />
      
      <div className="sm:flex block p-6">
            <div className="">
                <img className=" rounded-sm" src="/aboutImg.png"/>
            </div>
            
            <div>
            <p className="text-justify pt-3 sm:pt-0  sm:px-6 text-gray-700 ">Welcome to Life As It Is — a channel dedicated to real, raw, and emotional stories that reflect the true human experience.
            Here, we share heart-touching narratives of love, loss, hope, resilience, and redemption — told by real people, just like you.
            </p>
            <p className="text-justify  text-gray-700 sm:px-6 py-6">
            Whether it’s a story of silent strength, a moment of unexpected kindness, or a struggle that shaped a soul, every video on this channel is crafted to move hearts and inspire minds.
            </p>
            <p className="text-justify sm:px-6 text-gray-700 py-6">
            🧡 Why Subscribe?
            </p>
            <p className="text-justify sm:px-6 text-gray-700 ">
            🧡  Authentic real-life stories
            </p>
            <p className="text-justify sm:px-6 text-gray-700 ">
            🧡   Emotional, cinematic storytelling
            </p>
            <p className="text-justify sm:px-6 text-gray-700 ">
            🧡   Uplifting messages of hope and healing
            </p>
            <p className="text-justify sm:px-6 text-gray-700 ">
            🧡  New episodes every week
            </p>
            <p className="text-justify sm:p-6 mb-10 text-gray-700 py-6">
                 If you believe in the power of vulnerability, connection, and truth — you’re in the right place.
            Hit subscribe and join a growing community that finds meaning in life as it is.
            </p>
            </div>

      </div>
      
           

           

           

            

           
      <Footer />
    </div>
  );
}
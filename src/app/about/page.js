import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Subscribe from "@/component/Subscribe";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="sm:flex block px-6 pt-20 pb-28">
            <div className="">
                <img className="rounded-lg shadow-lg" src={"/me.jpg"} alt="Dada Ayokunle Samuel"/>
            </div>
            
            <div>
            <p className="text-justify pt-3 sm:pt-0 sm:px-6 text-gray-700 dark:text-gray-300">
  I'm <span className="font-bold text-gray-900 dark:text-white">Dada Ayokunle Samuel</span>, a Fullstack Developer passionate about
  building functional, accessible, and visually appealing web
  applications. I enjoy turning ideas into real-world digital
  experiences using modern web technologies.
</p>

<p className="text-justify text-gray-700 dark:text-gray-300 sm:px-6 py-6">
  My core stack includes React.js, Next.js, Laravel, ASP.NET Core Web API,
  Tailwind CSS, and Entity Framework. I enjoy working across both
  frontend and backend to build responsive interfaces, scalable APIs,
  and real-time applications and consuming the APIs in a frontend framework.
</p>

<p className="text-justify sm:px-6 text-gray-900 dark:text-white font-semibold py-6">
  Technical Skills
</p>

<p className="text-justify sm:px-6 text-gray-700 dark:text-gray-300">
  Languages: JavaScript, C#, PHP, TypeScript, HTML, CSS
</p>

<p className="text-justify sm:px-6 text-gray-700 dark:text-gray-300 py-6">
  Frameworks:
  <br />
  ✅ React.js 
  <br />
  ✅ Next.js 
  <br />
  ✅ Laravel 
  <br />
  ✅ Inertia.js 
  <br />
  ✅ Tailwind CSS 
  <br />
  ✅ Bootstrap
  <br />
  ✅ ASP.NET Core Web API 
  <br />
  ✅ Entity Framework
  <br />
  ✅ SignalR
</p>

<p className="text-justify sm:px-6 text-gray-700 dark:text-gray-300">
  Tools: Git, Figma, Chrome DevTools, NPM, Postman, OpenApi, Swagger, Visual Studio Code, Visual Studio.
</p>

<p className="text-justify sm:px-6 text-gray-700 dark:text-gray-300 py-6">
  Development: REST APIs, Responsive Web Design, Performance
  Optimization, Accessibility, UX/UI Principles, Cross-Browser
  Compatibility, Testing, and Real-time applications with Laravel Reverb
</p>

<p className="text-justify sm:p-6 mb-10 text-gray-700 dark:text-gray-300 py-6">
  I have experience working as a Web Developer at ShipPack and as a
  Tech Tutor at Classic Systems Infotech Ltd (affiliated with FUTA),
  where I taught web development, product design, and data processing.
  I hold a B.Sc in Physiology from Ekiti State University and a Diploma
  in Fullstack Web Development.
</p>

            <Subscribe />
            </div>

      </div>           
      <Footer />
    </div>
  );
}
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Subscribe from "@/component/Subscribe";
import Carousel from "@/component/Carousel";
import Slides from "@/component/Slides";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <div className="">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dada Ayokunle Samuel</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                A passionate fullstack developer with a love for crafting functional, accessible, and visually appealing web applications. I enjoy turning ideas into real-world digital experiences using modern web technologies.
              </p>
              <div className="flex gap-4">
                <Link href="/resume" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                  View My Work
                </Link>
                <Link href="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/me.jpg"
                  alt="Dada Ayokunle Samuel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ React.js & Next.js</li>
              <li>✓ HTML, CSS, JavaScript</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ Responsive Design</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Laravel & PHP</li>
              <li>✓ ASP.NET Core & C#</li>
              <li>✓ RESTful APIs</li>
              <li>✓ SQL Databases</li>
              <li>✓ Server Management</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tools & Others</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Git & Version Control</li>
              <li>✓ Figma Design</li>
              <li>✓ Web Development</li>
              <li>✓ Technical Tutoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="bg-blue-600 dark:bg-blue-900 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">Subscribe to my newsletter for web development tips and project updates.</p>
          <Subscribe />
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to work together?</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Let&apos;s build something amazing together</p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition inline-block">
          Contact Me</Link>
      </div>

      <Footer />
    </div>
  );
}

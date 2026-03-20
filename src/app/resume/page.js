import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { FaDotCircle, FaMarkdown } from "react-icons/fa";

export default function resume() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />
            <div className="md:flex block max-w-6xl mx-auto">
                {/* resume and education div */}
                <div className="w-full md:w-1/2 p-6 md:p-8 my-8 md:my-16 md:border-r border-gray-200 dark:border-gray-700">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white my-8">Resume</h1>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">I'm Dada Ayokunle Samuel, a passionate fullstack developer and tech tutor dedicated to building functional, accessible, and visually appealing web applications. Beyond development, I enjoy breaking down complex concepts and guiding others in turning ideas into real-world digital solutions using modern web technologies.</p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Education</h2>
                        <div className="space-y-3">
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white">Ekiti State University, Ado Ekiti</p>
                                <p className="text-gray-600 dark:text-gray-400 ml-4">Physiology</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white">Classic Systems InfoTech</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Affiliated with Federal University of Technology Akure, Ondo State</p>
                                <p className="text-gray-600 dark:text-gray-400 ml-4">Web Technology</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* experience and personal project */}
                <div className="w-full md:w-1/2 p-6 md:p-8 my-8 md:my-16">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white my-8">Experience</h2>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                            <p className="text-xl font-bold text-gray-900 dark:text-white">Tech Tutor</p>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">June - December 2024</p>
                            
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Classic Systems InfoTech Affiliated with Federal University of Technology Akure, Ondo State</p>

                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                <li className="flex items-start"><span className="mr-2">•</span>Taught web development, covering both frontend HTML, CSS, JavaScript and backend Laravel/PHP concepts</li>
                                <li className="flex items-start"><span className="mr-2">•</span>Delivered training on data processing using Microsoft Office applications Word, Excel, PowerPoint</li>
                                <li className="flex items-start"><span className="mr-2">•</span>Guided students in building practical projects to reinforce learning</li>
                                <li className="flex items-start"><span className="mr-2">•</span>Simplified complex technical concepts to support beginners and non-technical learners</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 my-2">
                            <p className="text-xl font-bold text-gray-900 dark:text-white">Software Developer Intern</p>

                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Shippack</p>

                            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                                <li className="flex items-start"><span className="mr-2">•</span>Developed and maintained web application features using Laravel and React.js</li>
                                <li className="flex items-start"><span className="mr-2">•</span>Built and consumed RESTful APIs for seamless frontend-backend integration</li>
                                <li className="flex items-start"><span className="mr-2">•</span>Worked with SQL databases to efficiently store and manage application data</li>
                                <li className="flex items-start"><span className="mr-2">•</span>Debugged and optimized code to improve performance and user experience</li>
                                <li className="flex items-start"><span className="mr-2">•</span>Collaborated with team members using Git for version control and project management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
import type React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 md:py-24 px-6 rounded-xl mb-12 shadow-xl">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Welcome to My Portfolio
                    </h1>
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Full-Stack Developer specializing in React, Node.js, and cloud technologies.
                        Passionate about creating scalable web applications and solving complex problems.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/portfolio"
                            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform text-center"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform text-center"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                    {
                        icon: "🚀",
                        title: "Full-Stack Development",
                        description: "Building complete web applications from frontend to backend with modern technologies."
                    },
                    {
                        icon: "☁️",
                        title: "Cloud Deployment",
                        description: "Deploying applications on AWS with CI/CD pipelines for seamless updates."
                    },
                    {
                        icon: "📱",
                        title: "Responsive Design",
                        description: "Creating beautiful, responsive interfaces that work perfectly on all devices."
                    }
                ].map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>

            {/* Technology Stack */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {["React", "Node.js", "MongoDB", "AWS", "TypeScript", "Express", "Tailwind CSS", "Git", "Docker", "GraphQL", "PostgreSQL", "Next.js"].map((tech) => (
                        <div
                            key={tech}
                            className="bg-blue-50 hover:bg-blue-100 text-blue-800 px-4 py-3 rounded-lg text-center font-medium transition-colors shadow-sm"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to start a project?</h2>
                <Link
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    Let's Connect
                </Link>
            </div>
        </div>
    )
}

export default Home
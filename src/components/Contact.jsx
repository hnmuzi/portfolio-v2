import { Mail, Github, Linkedin } from "lucide-react"
import ContactForm from "./ContactForm"

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="max-w-4xl w-full mx-auto text-center relative z-10">

                {/* Container dengan border & glassmorphism */}
                <div className="p-6 sm:p-8 md:p-12 bg-white/5 backdrop-blur-sm border-2 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl shadow-lg">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-12">
                        Feel free to reach out via email, connect on socials, or send me a direct message here.
                    </p>

                    {/* 🔗 Social Links */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
                        <a
                            href="#contact-form"
                            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                        >
                            <Mail className="w-6 h-6" /> Email Me
                        </a>

                        <a
                            href="https://github.com/hnmuzi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
                        >
                            <Github className="w-6 h-6" /> GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/hanif-muhammad-zidane/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition"
                        >
                            <Linkedin className="w-6 h-6" /> LinkedIn
                        </a>
                    </div>

                    {/* 📩 Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

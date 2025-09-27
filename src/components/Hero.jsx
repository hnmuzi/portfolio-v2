import { HashLink } from "react-router-hash-link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
    const ctaBtnClass =
        "mt-8 md:mt-10 inline-flex items-center gap-2 text-sm md:text-base font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 px-4 md:px-5 py-2 md:py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"

    const textVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    const photoVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-7 py-10">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

                {/* Left Side - Text */}
                <motion.div
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    className="text-center md:text-left"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-tight">
                        Welcome to <br /> My Design Portfolio
                    </h1>
                    <p className="mt-4 md:mt-6">
                        <span className="bg-white text-gray-900 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium">
                            Hanif Muhammad Zidane / Fullstack Developer
                        </span>
                    </p>

                    <HashLink
                        smooth
                        to="#contact-form"
                        className={ctaBtnClass}
                        aria-label="Scroll to contact section"
                    >
                        Work with me today
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 inline-block" />
                    </HashLink>
                </motion.div>

                {/* Right Side - Profile Photo */}
                <motion.div
                    variants={photoVariant}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center relative mt-10 md:mt-0"
                >
                    {/* Glow Ring */}
                    <div className="absolute -top-6 -left-6 w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 rounded-full bg-gradient-to-tr from-blue-700 via-teal-500 to-cyan-400 blur-3xl opacity-40 animate-pulse"></div>

                    {/* Foto Glassmorphism */}
                    <div className="overflow-hidden rounded-[50%] sm:rounded-[45%] md:rounded-[40%] w-52 h-64 sm:w-64 sm:h-80 md:w-80 md:h-[28rem] bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-105 relative z-10">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

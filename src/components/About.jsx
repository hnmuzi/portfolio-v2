import { UserCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
    // Variants untuk judul dan paragraf
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    return (
        <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-10 py-10">
            <motion.div
                className="max-w-4xl mx-auto text-center md:text-left space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    className="flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-8 md:mb-12"
                    variants={itemVariant}
                >
                    <UserCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400" />
                    About Me
                </motion.h2>


                <motion.div className="space-y-4 text-justify">
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
                        variants={itemVariant}
                    >
                        I’m <span className="font-bold">Hanif Muhammad Zidane</span>, a{" "}
                        <span className="font-bold">Fullstack Developer</span> with a strong
                        focus on frontend technologies. I consistently practice the fundamentals of{" "}
                        <span className="font-bold">PHP</span> and{" "}
                        <span className="font-bold">React</span>, while also deepening my backend
                        expertise with the <span className="font-bold">Laravel</span> framework.
                        My passion is to build responsive, scalable, and user-friendly web applications.
                    </motion.p>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
                        variants={itemVariant}
                    >
                        Beyond technical skills, I value clean code, collaboration, and adaptability.
                        I enjoy working in teams, staying updated with the latest tech trends, and
                        continuously improving my craft to deliver solutions that provide real impact
                        for users and businesses.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    )
}

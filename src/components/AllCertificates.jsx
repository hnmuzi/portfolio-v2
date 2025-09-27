import { useState } from "react"
import { HashLink } from "react-router-hash-link"
import { ArrowLeft, Award, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Reveal from "../components/Reveal"
import certificates from "../data/certificates"

export default function AllCertificates() {
    const [selectedCert, setSelectedCert] = useState(null)

    // Group certificates by year
    const groupedByYear = certificates
        .sort((a, b) => b.year - a.year)
        .reduce((acc, cert) => {
            if (!acc[cert.year]) acc[cert.year] = []
            acc[cert.year].push(cert)
            return acc
        }, {})

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-900 text-white relative">
            {/* Back Button */}
            <HashLink
                smooth
                to="/#hero"
                className="fixed z-50 inline-flex items-center gap-2 mb-8 mt-2 text-yellow-400 bg-gray-800 px-3 py-2 rounded-md shadow hover:bg-gray-700 transition"
            >
                <ArrowLeft size={20} />
                Back to Home
            </HashLink>

            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <Reveal>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 tracking-tight text-center"
                    >
                        <Award className="w-8 h-8 text-yellow-400" />
                        All Certificates
                    </motion.h2>
                </Reveal>

                {/* Loop per tahun */}
                {Object.keys(groupedByYear)
                    .sort((a, b) => b - a)
                    .map((year, idx) => (
                        <div
                            key={year}
                            className={`mb-16 pb-12 ${idx !== Object.keys(groupedByYear).length - 1 ? "border-b border-gray-700" : ""}`}
                        >
                            {/* Year Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-gray-900 font-bold">
                                    {year.toString().slice(-2)}
                                </div>
                                <h3 className="text-2xl font-bold text-yellow-400">{year}</h3>
                            </motion.div>

                            {/* Certificates Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {groupedByYear[year].map((c, i) => (
                                    <motion.div
                                        key={i}
                                        onClick={() => setSelectedCert(c)}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group"
                                    >
                                        <div className="aspect-[16/9] overflow-hidden">
                                            <img
                                                src={c.img}
                                                alt={c.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-6 flex flex-col flex-1 text-left">
                                            <h3 className="text-lg sm:text-xl font-semibold text-black">{c.title}</h3>
                                            <p className="mt-2 text-gray-600 text-sm sm:text-base flex-1">{c.desc}</p>
                                            <span className="mt-4 inline-block text-blue-600 hover:underline text-sm sm:text-base">
                                                View Certificate →
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 sm:px-6"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 40 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white rounded-2xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh] shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition-colors p-2 rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <img
                                src={selectedCert.img}
                                alt={selectedCert.title}
                                className="w-full max-h-80 sm:max-h-[50vh] object-contain bg-gray-100"
                            />
                            <div className="p-6 sm:p-8 text-left">
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedCert.title}</h3>
                                <p className="mt-3 text-gray-700 text-sm sm:text-base">{selectedCert.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

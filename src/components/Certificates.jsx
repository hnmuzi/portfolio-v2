import { useState } from "react"
import { Link } from "react-router-dom"
import { X, Award, ExternalLink } from "lucide-react"
import certificates from "../data/certificates"

// Fungsi potong deskripsi (untuk preview di homepage)
function truncateDesc(desc, wordLimit = 8) {
    const words = desc.split(" ")
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "..."
    }
    return desc
}

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null)

    return (
        <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 text-white min-h-screen">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-12">
                    <Award className="w-7 h-7 text-yellow-400" />
                    Certificates
                </h2>

                {/* Grid Certificates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {certificates.slice(0, 4).map((c, i) => (
                        <div
                            key={i}
                            tabIndex={0}
                            className="group bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 flex flex-col hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] focus:shadow-2xl focus:-translate-y-1 focus:scale-[1.02] ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-400 cursor-pointer"
                            onClick={() => setSelectedCert(c)}
                        >
                            <div className="aspect-[16/9] overflow-hidden">
                                <img
                                    src={c.img}
                                    alt={c.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 sm:p-6 flex flex-col flex-1 text-left">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {c.title}
                                </h3>
                                <p className="mt-2 text-gray-600 text-sm sm:text-base flex-1">
                                    {truncateDesc(c.desc)}
                                </p>
                                <button
                                    className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium hover:underline text-sm self-start cursor-pointer"
                                >
                                    View Certificate <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button ke All Certificates */}
                <Link
                    to="/all-certificates"
                    className="mt-12 inline-block px-6 py-3 bg-gray-800 rounded-lg text-white font-bold text-md hover:bg-gray-700 transition-colors"
                >
                    See All Certificates
                </Link>
            </div>

            {/* Popup Modal */}
            {selectedCert && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6">
                    <div className="bg-white text-gray-800 max-w-3xl w-full rounded-2xl shadow-2xl relative p-6 sm:p-8 animate-scaleIn overflow-y-auto max-h-[90vh]">
                        {/* Tombol Close */}
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-600 p-2 rounded-full cursor-pointer transition"
                        >
                            <X size={24} strokeWidth={2.5} />
                        </button>

                        {/* Detail Sertifikat */}
                        <div className="flex justify-center">
                            <img
                                src={selectedCert.img}
                                alt={selectedCert.title}
                                className="w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg"
                            />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mt-4">{selectedCert.title}</h3>
                        <p className="mt-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                            {selectedCert.desc}
                        </p>

                        {/* Tombol Link Sertifikat Online */}
                        {selectedCert.link && (
                            <a
                                href={selectedCert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                Open Certificate <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

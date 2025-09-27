import { useState } from "react"
import { Rocket, ArrowLeft, X, ExternalLink } from "lucide-react"
import { HashLink } from "react-router-hash-link"
import projects from "../data/projects"
import Reveal from "../components/Reveal"

export default function AllProjects() {
    const [selectedProject, setSelectedProject] = useState(null)

    // Group projects by year
    const groupedByYear = projects
        .sort((a, b) => b.year - a.year)
        .reduce((acc, project) => {
            if (!acc[project.year]) acc[project.year] = []
            acc[project.year].push(project)
            return acc
        }, {})

    return (
        <section className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-20 relative">
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
                    <h2 className="flex items-center justify-center gap-2 text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
                        <Rocket className="w-8 h-8 text-yellow-400" />
                        All Projects
                    </h2>
                </Reveal>

                {/* Loop per year */}
                {Object.keys(groupedByYear)
                    .sort((a, b) => b - a)
                    .map((year, idx) => (
                        <Reveal key={year}>
                            <div
                                className={`mb-16 pb-12 ${idx !== Object.keys(groupedByYear).length - 1 ? "border-b border-gray-700" : ""
                                    }`}
                            >
                                {/* Year header */}
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-gray-900 font-bold">
                                        {year.toString().slice(-2)}
                                    </div>
                                    <h3 className="text-2xl font-bold text-yellow-400">{year}</h3>
                                </div>

                                {/* Projects grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {groupedByYear[year].map((p, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setSelectedProject(p)}
                                            className="bg-white text-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group"
                                        >
                                            <div className="aspect-[16/9] overflow-hidden">
                                                <img
                                                    src={p.img}
                                                    alt={p.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="p-4 sm:p-6 flex flex-col flex-1 text-left">
                                                <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
                                                <p className="mt-2 text-gray-700 text-sm sm:text-base flex-1">{p.desc}</p>
                                                <span className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:underline text-sm sm:text-base self-start">
                                                    View Project <ExternalLink className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
            </div>

            {/* Modal Popup */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4 sm:px-6">
                    <div className="bg-white rounded-2xl max-w-3xl w-full relative overflow-y-auto max-h-[90vh] shadow-2xl animate-fadeIn">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition-colors p-2 rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                            <img
                                src={selectedProject.img}
                                alt={selectedProject.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-6 sm:p-8 text-left">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedProject.title}</h3>
                            <p className="mt-3 text-gray-700 text-sm sm:text-base">{selectedProject.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontEndSkills = ["React", "Vue", "Typescript", "Tailwind CSS"];
    const backEndSkills = ["Node.js", "PostgreSQL", "MySQL", "MongoDB", "Django/Flask"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-6 w-full">
                <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r 
                            from-blue-500 to-cyan-400 bg-clip-text text-transparent"
                > 
                    About Me 
                </h2>

                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-8 leading-relaxed text-left">
                        Passionate about crafting engaging web experiences, blending design and functionality
                        with a focus on clean, responsive, and user-friendly interfaces.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-left">
                            <h3 className="text-xl font-bold mb-4 text-white text-left">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontEndSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="text-left">
                            <h3 className="text-xl font-bold mb-4 text-white text-left">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backEndSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm 
                                        hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all text-left">
                        <h3 className="text-xl font-bold mb-4 text-white text-left">Education</h3>
                        <div className="space-y-3 text-gray-300">
                            <div>
                                <p className="font-medium">
                                    B.S. in Computer Science
                                </p>
                                <p className="text-sm text-gray-400">University of Mindanao</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all text-left">
                        <h3 className="text-xl font-bold mb-4 text-white text-left">Certifications</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <p className="font-medium">
                                    Java  
                                    {/* <span className="text-sm text-gray-400">— ABC Corp (2027 - Present)</span> */}
                                </p>
                                {/* <p className="text-sm text-gray-400">Building and maintaining modern web applications.</p> */}
                            </div>
                            <div>
                                <p className="font-medium">
                                    Database  
                                    {/* <span className="text-sm text-gray-400">— Startup Corp (2019)</span> */}
                                </p>
                                {/* <p className="text-sm text-gray-400">Assisted in frontend development and testing.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};

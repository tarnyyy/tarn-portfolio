import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                        hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] 
                        transition-all flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Chat Application</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet. Et iste corporis qui amet omnis et nesciunt magnam.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] 
                                transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>

          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                        hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] 
                        transition-all flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">URL Shortener Service</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet. Et iste corporis qui amet omnis et nesciunt magnam.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] 
                                transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>

          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                        hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] 
                        transition-all flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Fitness Tracker</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet. Et iste corporis qui amet omnis et nesciunt magnam.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] 
                                transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>

          <div
            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                        hover:border-blue-500/30 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] 
                        transition-all flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Movie Library Database</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet. Et iste corporis qui amet omnis et nesciunt magnam.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                hover:bg-blue-500/20 hover:shadow-[0_2_8px_rgba(59,130,246,0.1)] 
                                transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

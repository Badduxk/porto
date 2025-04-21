import { RevealOnScroll } from "./RevealOnScroll"
import mrezaImage from 'public/assets/mreza.png'

export const About = () => {

    const frontedSkills = ["react", "lazarus", "c++", "tailwind.css", "devpass"];
    const backendSkills = ["node.js", "python", "heidi", "php", "graph"];

 return (
    <section
      id="about" 
      className="min-h-screen flex items-center justify-center py-20"
    >
       <RevealOnScroll>  
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            
            <img  src="/mreza.png" alt="About Me" className="mx-auto mb-6 w-100 h-100 rounded-full object-cover shadow-lg mt-12" />   

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                <p className="text-gray-300 mb-6 text-center">
                    saya Muhammad Reza Faishal yang sekarang sedang menempuh pendidikan di Insitute Teknologi Nasional Bandung saya sangat menyukai informatika karna saya senang membuat website seperti ini 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontedSkills.map((tech, key) => (
                            <span 
                              key={key}
                              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                  </div>

                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key) => (
                            <span 
                              key={key}
                              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> INFORMATIK </strong> - Insitut Teknologi Nasional (2023-2027)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Web Developer, Networking
                        </li>
                    </ul>  
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> Organization </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Logistik Wisuda 1 (2024)</h4>
                            <p>
                                merencanakan, menyiapkan barang barang untuk keperluan acara
                            </p>
                        </div>                    
                    </div>   
                </div>
            </div>         
        </div>
      </RevealOnScroll>  
    </section>   
 ); 
};
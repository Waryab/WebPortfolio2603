
import { Mail, Linkedin, ArrowDownRight } from "lucide-react";

export const Contact = () => {
  const handleSubmit = async () => {

  };

  return (
    <section id="contact" className="md:min-h-screen py-32 pl-20 pr-8 md:pl-44 md:pr-24  bg-black text-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] mb-8 opacity-50">Get in touch</p>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16">
              LET'S CREATE<br />
              <span className="serif italic font-normal opacity-50">SOMETHING NEW.</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:contact@waryab.com" className="group flex items-center justify-between p-8 border border-white/10 rounded-3xl hover:bg-white hover:text-black transition-all">
                <div className="flex flex-col gap-2">
                  <span className="mono text-xs opacity-50">EMAIL</span>
                  <span className="text-l">contact@waryab.com</span>
                </div>
                <Mail className="w-6 h-6 opacity-50 group-hover:opacity-100" />
              </a>
              <a href="https://linkedin.com/in/waryab" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-8 border border-white/10 rounded-3xl hover:bg-white hover:text-black transition-all">
                <div className="flex flex-col gap-2">
                  <span className="mono text-xs opacity-50">LINKEDIN</span>
                  <span className="text-l">/in/waryab</span>
                </div>
                <Linkedin className="w-6 h-6 opacity-50 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full max-w-xl">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="mono text-xs opacity-50 uppercase tracking-widest">Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors text-lg" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="mono text-xs opacity-50 uppercase tracking-widest">Email</label>
                      <input required type="email" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors text-lg" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="mono text-xs opacity-50 uppercase tracking-widest">Message</label>
                    <textarea required rows={4} className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors resize-none text-lg" placeholder="Tell me about your project"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="group flex items-center gap-4 px-6 py-4 md:px-12 md:py-6 bg-white text-black rounded-full transition-all hover:scale-105"
                  >
                    <span className="mono text-sm uppercase tracking-widest">
                       Send Message
                    </span>
                    <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

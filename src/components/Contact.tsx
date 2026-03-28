import { FiMail, FiGithub, FiArrowDownRight, FiLinkedin } from "react-icons/fi";
import { SpotlightBox } from "./SpotlightBox";
import { useState } from "react";

export const Contact = () => {
  const [submission, setSubmission] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_FORM_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    setSubmission(data.success ? "success" : "error");
  };

  return (
    <section id="contact" className="md:min-h-[90vh] py-8 md:py-32 pl-20 pr-8 md:px-36 lg:px-44  bg-black text-white relative">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <p className="mono text-xs uppercase tracking-[0.3em] mb-8 opacity-50">Get in touch</p>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16">
              LET'S CREATE<br />
              <span className="serif italic font-normal opacity-50">SOMETHING NEW.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactLink
                href="mailto:contact@waryab.com"
                label="EMAIL"
                value="contact@waryab.com"
                icon={<FiMail className="w-6 h-6 opacity-50" />}
              />
              <ContactLink
                href="https://linkedin.com/in/waryab"
                label="LINKEDIN"
                value="/in/waryab"
                icon={<FiLinkedin className="w-6 h-6 opacity-50" />}
                external
              />
              <ContactLink
                href="https://github.com/waryab"
                label="GITHUB"
                value="/waryab"
                icon={<FiGithub className="size-6 opacity-50" />}
                external
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full relative">
              {submission === "success" && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xs scale-110">
                  <div className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tighter">THANK YOU!</div>
                  <div className="text-lg md:text-xl text-white mb-2 text-center opacity-50">Your message has been submitted.<br />I'll get back to you soon.</div>
                </div>
              )}
              <form className="space-y-8" onSubmit={handleSubmit}>
                {submission == "error" && (
                  <div className="mb-4 p-4 border border-red-500 text-red-500 mono">
                    Something went wrong. Please try again, or contact me directly at <a href="mailto:contact@waryab.com" target="_blank" rel="noopener noreferrer" className="underline">contact@waryab.com</a>.
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="mono text-xs opacity-50 uppercase tracking-widest">Name</label>
                    <input required type="text" name="name" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors text-lg" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="mono text-xs opacity-50 uppercase tracking-widest">Email</label>
                    <input required type="email" name="email" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors text-lg" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="mono text-xs opacity-50 uppercase tracking-widest">Message</label>
                  <textarea required rows={4} name="message" className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-white transition-colors resize-none text-lg" placeholder="Tell me about your project"></textarea>
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-4 px-6 py-4 md:px-12 md:py-6 bg-white text-black rounded-full transition-all hover:scale-105 select-none cursor-pointer"
                  disabled={submission === "success"}
                >
                  <span className="mono text-sm uppercase tracking-widest">
                    Send Message
                  </span>
                  <FiArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type ContactLinkProps = {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  external?: boolean;
};

const ContactLink = ({
  href,
  label,
  value,
  icon,
  external,
}: ContactLinkProps) => (
  <SpotlightBox className="rounded-3xl group">
    <a
      href={href}
      className="flex items-center justify-between p-4 md:p-8 border border-white/10 rounded-3xl transition hover:text-black duration-300"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className="flex flex-col gap-2">
        <span className="mono text-xs opacity-50">{label}</span>
        <span className="text-l">{value}</span>
      </div>
      {icon}
    </a>
  </SpotlightBox>
);
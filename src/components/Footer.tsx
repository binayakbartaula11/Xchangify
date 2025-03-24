import { Github, Linkedin, Twitter, Globe } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/binayakbartaula11",
      icon: (
        <Github className="h-6 w-6 text-white group-hover:text-[#6e5494] transition-colors duration-300" />
      ),
      label: "GitHub",
    },
    {
      href: "https://x.com/BartaulaBinayak",
      icon: (
        <Twitter className="h-6 w-6 text-white group-hover:text-[#1DA1F2] transition-colors duration-300" />
      ),
      label: "Twitter",
    },
    {
      href: "https://www.linkedin.com/in/binayakbartaula",
      icon: (
        <Linkedin className="h-6 w-6 text-white group-hover:text-[#0A66C2] transition-colors duration-300" />
      ),
      label: "LinkedIn",
    },
    {
      href: "https://binayakio.netlify.app",
      icon: (
        <Globe className="h-6 w-6 text-white group-hover:text-[#2ECC71] transition-colors duration-300" />
      ),
      label: "Personal Website",
    },
  ];

  return (
    <footer className="w-full mt-8 bg-gradient-to-b from-transparent to-blue-900/90 backdrop-blur-sm relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Quote Section */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            "Trade scripts destiny."
          </h2>
          <p className="text-lg text-white/70">
            Start writing yours with every exchange.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:ring-2 hover:ring-white/30 p-3"
            >
              {link.icon}
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="text-center space-y-2">
          <p className="text-white/90 text-center text-sm md:text-base italic">
            "Rooted in the rhythm of global flow, driven by the force of limitless exchange."
          </p>
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Xchangify. All rights reserved.
          </p>
          <p className="mt-1 text-white/50">
            Where boundaries dissolve and the world's wealth connects.
          </p>
        </div>
      </div>
    </footer>
  );
}

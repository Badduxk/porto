import { RevealOnScroll } from "./RevealOnScroll";

export const Contact = () => {
  const contacts = [
    {
      emoji: "📸",
      label: "Instagram",
      link: "https://instagram.com/username",
      username: "@rzfisl",
    },
    {
      emoji: "💼",
      label: "LinkedIn",
      link: "https://linkedin.com/in/username",
      username: "https://www.linkedin.com/in/muhammadreza28/",
    },
    {
      emoji: "💻",
      label: "GitHub",
      link: "https://github.com/username",
      username: "https://github.com/Badduxk",
    },
    {
      emoji: "📧",
      label: "Email",
      link: "mailto:youremail@gmail.com",
      username: "rezafaishal8@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="space-y-6 mb-10">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
              />
            </div>
            {/* Tambahkan input lainnya sesuai kebutuhan */}
          </form>

          {/* Sosial Media Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition bg-white/5 backdrop-blur"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center space-x-2">
                  <span>{contact.emoji}</span>
                  <span>{contact.label}</span>
                </h3>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline break-all"
                >
                  {contact.username}
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

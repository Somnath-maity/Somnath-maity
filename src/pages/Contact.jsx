import { HiEnvelope, HiPhone } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { contactMethods } from '../data/portfolioData'

const iconMap = {
  email: HiEnvelope,
  phone: HiPhone,
  whatsapp: FaWhatsapp,
}

export default function Contact() {
  return (
    <section className="h-full overflow-y-auto pb-28 pt-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm tracking-wider mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-accent">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact method cards */}
          <div className="space-y-6">
            {contactMethods.map((method, i) => {
              const Icon = iconMap[method.icon] || HiEnvelope
              return (
                <div
                  key={i}
                  className="bg-navy-600/50 rounded-2xl p-6 border border-white/5 text-center hover:border-accent/20 transition-colors"
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="text-white font-semibold">{method.type}</h3>
                  <p className="text-gray-400 text-sm mt-1">{method.value}</p>
                  <a
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm mt-3 inline-block hover:underline"
                  >
                    {method.label}
                  </a>
                </div>
              )
            })}
          </div>

          {/* Contact form */}
          <form
            action="https://formspree.io/f/xjvlbjlz"
            method="POST"
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full px-5 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-navy-900 rounded-lg font-semibold hover:bg-accent/90 transition-all flex items-center gap-2 cursor-pointer"
            >
              Send Message
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

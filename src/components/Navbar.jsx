import {
  HiHome,
  HiUser,
  HiCheckBadge,
  HiRocketLaunch,
  HiAcademicCap,
  HiChatBubbleLeftRight,
} from 'react-icons/hi2'

const navItems = [
  { id: 'home', icon: HiHome, label: 'Home' },
  { id: 'about', icon: HiUser, label: 'About' },
  { id: 'skills', icon: HiCheckBadge, label: 'Skills' },
  { id: 'portfolio', icon: HiRocketLaunch, label: 'Portfolio' },
  { id: 'education', icon: HiAcademicCap, label: 'Education' },
  { id: 'contact', icon: HiChatBubbleLeftRight, label: 'Contact' },
]

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-3 rounded-full bg-navy-700/80 backdrop-blur-xl border border-white/5 shadow-2xl">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActivePage(id)}
            title={label}
            className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 cursor-pointer ${
              activePage === id
                ? 'bg-accent text-navy-900 scale-110 shadow-lg shadow-accent/30'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </nav>
  )
}

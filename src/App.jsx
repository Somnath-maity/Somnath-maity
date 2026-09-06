import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Education from './pages/Education'
import Contact from './pages/Contact'

const pages = {
  home: Home,
  about: About,
  skills: Skills,
  portfolio: Portfolio,
  education: Education,
  contact: Contact,
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const ActiveComponent = pages[activePage]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-navy-900">
      <div className="h-full w-full">
        <ActiveComponent onNavigate={setActivePage} />
      </div>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
    </div>
  )
}

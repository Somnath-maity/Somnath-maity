import { HiCheckBadge } from 'react-icons/hi2'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section className="h-full overflow-y-auto pb-28 pt-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm tracking-wider mb-2">
            What Skills I Have
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-accent">
            My Proficiency
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <div
              key={i}
              className="bg-navy-600/50 rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition-colors"
            >
              <h3 className="text-xl font-semibold text-accent text-center mb-8">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {group.items.map((skill, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <HiCheckBadge className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

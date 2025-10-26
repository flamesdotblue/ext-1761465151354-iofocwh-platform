import { Rocket, Star, Settings } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Fast Setup',
    desc: 'Vite + React + Tailwind for an instant developer experience.'
  },
  {
    icon: Star,
    title: 'Polished UI',
    desc: 'Clean, modern aesthetics with smooth interactions and sensible defaults.'
  },
  {
    icon: Settings,
    title: 'Extensible',
    desc: 'Add components, animations, and 3D scenes without the hassle.'
  }
];

function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need</h2>
          <p className="mt-3 text-gray-600">A minimal starter to build beautiful experiences quickly.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gray-900 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

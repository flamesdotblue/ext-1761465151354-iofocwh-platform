import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden" aria-label="Interactive cover">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="pointer-events-none max-w-4xl text-center">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">Hello World</h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            A minimalist, interactive hero powered by Spline. Tap or move to ripple the grid.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#features"
              className="pointer-events-auto inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 transition"
            >
              Get Started
            </a>
            <a
              href="#cta"
              className="pointer-events-auto inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

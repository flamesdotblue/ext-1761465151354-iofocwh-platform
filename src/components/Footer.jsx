function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600">© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4 text-gray-600">
          <a className="hover:text-gray-900 transition" href="#features">Features</a>
          <a className="hover:text-gray-900 transition" href="#cta">Get Started</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

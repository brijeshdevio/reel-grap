export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
      data-purpose="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-custom flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              ReelGrab
            </span>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-base"
              href="#how-it-works"
            >
              How it works
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-base"
              href="#"
            >
              API
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary transition-base"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

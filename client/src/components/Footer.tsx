export function Footer() {
  return (
    <footer
      className="bg-slate-900 text-slate-400 py-12"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
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
            <span className="text-white font-bold tracking-tight">
              ReelGrab
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a className="hover:text-white transition-base" href="#">
              About
            </a>
            <a className="hover:text-white transition-base" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-base" href="#">
              Terms of Service
            </a>
            <a className="hover:text-white transition-base" href="#">
              Contact
            </a>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} ReelGrab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

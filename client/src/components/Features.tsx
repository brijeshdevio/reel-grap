export function Features() {
  return (
    <section className="py-20 bg-white" data-purpose="features">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Features</h2>
          <p className="text-slate-600 mt-4">
            ReelGrab makes it easy to download Instagram Reels in high quality.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fast Processing */}
          <div className="p-8 border border-slate-100 rounded-custom hover:shadow-lg transition-base group">
            <div className="w-12 h-12 bg-indigo-50 text-primary rounded-custom flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-base">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Fast Processing
            </h3>
            <p className="text-slate-500 text-sm">
              Servers optimized for high-speed video extraction and fetching.
            </p>
          </div>
          {/* HD Quality */}
          <div className="p-8 border border-slate-100 rounded-custom hover:shadow-lg transition-base group">
            <div className="w-12 h-12 bg-indigo-50 text-primary rounded-custom flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-base">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              HD Quality
            </h3>
            <p className="text-slate-500 text-sm">
              Get the highest resolution available directly from Instagram
              servers.
            </p>
          </div>
          {/* Privacy First */}
          <div className="p-8 border border-slate-100 rounded-custom hover:shadow-lg transition-base group">
            <div className="w-12 h-12 bg-indigo-50 text-primary rounded-custom flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-base">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Privacy First
            </h3>
            <p className="text-slate-500 text-sm">
              We don't track your downloads or store any personal video data.
            </p>
          </div>
          {/* Works on Mobile */}
          <div className="p-8 border border-slate-100 rounded-custom hover:shadow-lg transition-base group">
            <div className="w-12 h-12 bg-indigo-50 text-primary rounded-custom flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-base">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Works on Mobile
            </h3>
            <p className="text-slate-500 text-sm">
              Fully responsive design works perfectly on iOS, Android, and
              Desktop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section
      className="py-10 bg-slate-50"
      data-purpose="instructions"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
          <p className="text-slate-600 mt-4">
            Three simple steps to save your favorite reels.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary shadow-sm">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Copy Link</h3>
            <p className="text-slate-600 leading-relaxed">
              Open Instagram and copy the URL of the Reel you want to download.
            </p>
          </div>
          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary shadow-sm">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Paste Above
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Paste the link into the input field at the top of this page.
            </p>
          </div>
          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary shadow-sm">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Download</h3>
            <p className="text-slate-600 leading-relaxed">
              Click 'Download' and choose your quality to save it to your
              device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

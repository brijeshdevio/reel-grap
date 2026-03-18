export function CTA() {
  return (
    <section className="py-24 bg-white" data-purpose="call-to-action">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-primary rounded-custom p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to download your reel?
          </h2>
          <p className="text-indigo-100 mb-10 text-lg">
            Join thousands of users who download HD reels daily with ReelGrab.
          </p>
          <a
            className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-custom hover:bg-slate-100 transition-base shadow-lg"
            href="#"
          >
            Try Now
          </a>
        </div>
      </div>
    </section>
  );
}

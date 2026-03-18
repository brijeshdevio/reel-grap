import { useState } from "react";
import axios, { isAxiosError } from "axios";
import { Loader2, AlertCircle, Download } from "lucide-react";

function DownloaderForm() {
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  const api = async () => {
    try {
      const res = await axiosClient.get(`/download/`, {
        params: { url: inputUrl },
      });
      return res.data;
    } catch (err) {
      if (isAxiosError(err)) {
        if (err?.response) {
          throw new Error(err.response.data?.error || "Server error");
        } else if (err.code === "ECONNABORTED") {
          throw new Error("Request timeout");
        }
      }
      throw new Error("Network error");
    }
  };

  const handleDownload = async () => {
    if (!inputUrl.trim()) {
      setError("Please enter a valid URL");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await api();

      // ✅ Safe extraction (no crash)
      const video = response?.data?.result?.[0];

      if (!video?.url) {
        throw new Error("Video not found");
      }

      // ✅ Direct download via anchor (best approach)
      const a = document.createElement("a");
      a.href = video.url;
      a.download = "reel.mp4";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      const error = err as {
        message: string;
      };
      setError(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white p-2 rounded-custom shadow-xl border border-slate-200 flex flex-col md:flex-row gap-2 mb-4">
        <input
          className="flex-1 border-none focus:ring-0 text-slate-800 px-4 py-3 text-lg"
          placeholder="Paste Instagram Reel URL here..."
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />

        <button
          className="bg-primary hover:bg-primaryDark text-white font-semibold px-8 py-3 rounded-custom transition-base shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          onClick={handleDownload}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Download Now
            </>
          )}
        </button>
      </div>

      {/* Error UI (non-breaking) */}
      {error && (
        <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
    </>
  );
}

export default DownloaderForm;

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Download Instagram Reels{" "}
          <span className="text-primary">in Seconds</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Paste your link, get HD video instantly. No watermark. Free.
        </p>

        <DownloaderForm />

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500 mt-8">
          <div className="flex items-center gap-2">No login required</div>
          <div className="flex items-center gap-2">Fast download</div>
          <div className="flex items-center gap-2">Safe & secure</div>
        </div>
      </div>
    </section>
  );
}

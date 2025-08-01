import Link from 'next/link';

export default function HomeMono() {
  return (
    <main className="h-screen bg-white text-gray-900 flex flex-col items-center justify-between overflow-hidden">
      <section className="text-center py-0 px-4 sm:px-6 md:px-10 w-full flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2 tracking-widest uppercase font-mono">
          Renewed
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
          Stay on top of your subscriptions. Renewed helps you track, manage, and get notified before your bills auto-renew so you're never caught off guard.
        </p>
      </section>

      <section className="py-0 px-4 sm:px-6 md:px-10 w-full flex-1">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              01. Track Subscriptions
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm">
              Add any app, service, or subscription you're paying for from Netflix to gym memberships.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              02. Set Reminders
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm">
              Get smart alerts before your next renewal. Monthly, yearly, or custom you choose.
            </p>
          </div>

          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              03. Take Control
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm">
              Save money by canceling subscriptions on time. Renewed gives you clarity and control over recurring expenses.
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.renewed.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-700 transition-colors duration-200"
            >
              Download App
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-4 border-t border-gray-100 w-full">
        <div className="mb-1 space-x-4 font-mono">
          <Link href="/terms" className="hover:text-gray-600 transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">
            Privacy
          </Link>
        </div>
        <p className="font-mono">© {new Date().getFullYear()} Renewed</p>
      </footer>
    </main>
  );
}

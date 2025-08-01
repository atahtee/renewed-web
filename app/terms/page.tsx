import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="h-full min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 sm:px-6 md:px-10">
      <section className="max-w-2xl w-full py-12">
        <h1 className="text-3xl font-bold mb-4 tracking-widest uppercase font-mono text-center">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-center">
          These terms outline the rules and responsibilities for using Renewed to manage your subscriptions.
        </p>

        <div className="space-y-6 text-gray-700 text-sm sm:text-base">
          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              01. Acceptance of Terms
            </h2>
            <p>
              By using Renewed, you agree to follow these terms and all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              02. Use of the App
            </h2>
            <p>
              Renewed lets you track subscriptions and set reminders for renewals. You agree not to misuse the app, attempt to disrupt its functionality, or use it for unlawful purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              03. Privacy & Data
            </h2>
            <p>
              Your subscription data is stored locally on your device. We collect minimal data for crash reporting. See our <Link href="/privacy" className="underline hover:no-underline">Privacy Policy</Link> for details.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              04. Content Responsibility
            </h2>
            <p>
              You are responsible for the subscription data you enter. Ensure it complies with legal and ethical standards.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              05. Changes to Terms
            </h2>
            <p>
              We may update these terms periodically. Continued use of Renewed after changes indicates your acceptance of the updated terms.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-8 w-full border-t border-gray-100">
        <div className="mb-1 space-x-4 font-mono">
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">
            Privacy
          </Link>
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
        </div>
        <p className="font-mono">© {new Date().getFullYear()} Renewed</p>
      </footer>
    </main>
  );
}
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="h-full min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 sm:px-6 md:px-10">
      <section className="max-w-2xl w-full py-12">
        <h1 className="text-3xl font-bold mb-4 tracking-widest uppercase font-mono text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-center">
          At Renewed, we prioritize your privacy. This policy explains how we handle your data, use notifications, and ensure your information stays secure.
        </p>

        <div className="space-y-6 text-gray-700 text-sm sm:text-base">
          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              01. Our Commitment to Privacy
            </h2>
            <p>
              Renewed is designed to help you manage subscriptions with minimal data collection. We store your data locally on your device and only collect what’s necessary to provide reminders and improve the app.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              02. What We Collect
            </h2>
            <p>
              We collect only the data needed to run Renewed:
              <ul className="list-disc pl-5 mt-2">
                <li>Subscription details you enter (e.g., name, amount, renewal date), stored locally on your device.</li>
                <li>Technical information (e.g., device type, app version, error logs) sent to Firebase Crashlytics to fix bugs and improve performance.</li>
              </ul>
              We do not collect personal identifiers like your name, email, or payment details.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              03. How We Use Your Data
            </h2>
            <p>
              Your data is used to:
              <ul className="list-disc pl-5 mt-2">
                <li>Store and display your subscription details locally.</li>
                <li>Schedule local notifications to remind you of upcoming renewals.</li>
                <li>Analyze crashes and errors via Firebase Crashlytics to improve the app.</li>
              </ul>
              We do not use your data for advertising or any other purpose.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              04. Sharing & Third Parties
            </h2>
            <p>
              We share minimal data with Firebase Crashlytics (operated by Google) to report crashes and errors. This includes device information and error logs but no personally identifiable information. Firebase is contractually obligated to protect this data. No other third parties receive your data.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              05. Security Practices
            </h2>
            <p>
              Your subscription data is stored locally on your device using Isar, a secure local database. While we do not encrypt this data, it remains private to your device and is not transmitted elsewhere. Crashlytics data is sent securely to Google’s servers. We follow industry-standard practices to protect our app, but no system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">
              06. Contact Us
            </h2>
            <p>
              Questions about your privacy? Contact us at{' '}
              <a href="mailto:support@renewed.app" className="underline hover:no-underline">
                atatisam14@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-400 py-8 w-full border-t border-gray-100">
        <div className="mb-1 space-x-4 font-mono">
          <Link href="/terms" className="hover:text-gray-600 transition-colors">
            Terms
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
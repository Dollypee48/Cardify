import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-700">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Cardify</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
          Create professional business cards and ID cards easily. Customize, preview, and download—all in your browser.
        </p>
        <Link
          to="/generate"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Use Cardify?</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">No Design Skills Needed</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simply enter your info and let Cardify do the rest. Choose from clean, professional templates.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Instant Preview & Download</h3>
            <p className="text-gray-600 dark:text-gray-300">
              See your card as you type. Download in high-quality PNG for print or digital use.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">100% Free & Browser-Based</h3>
            <p className="text-gray-600 dark:text-gray-300">
              No account needed. No installations. Create cards directly from your phone or computer.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-200 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <span className="text-4xl">📝</span>
            <h4 className="text-xl font-semibold mt-4">1. Fill in Details</h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Choose card type and input your details like name, job title, ID, or photo.
            </p>
          </div>
          <div className="p-4">
            <span className="text-4xl">👁️</span>
            <h4 className="text-xl font-semibold mt-4">2. Live Preview</h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              See your card update instantly as you type. Switch between business or ID layout.
            </p>
          </div>
          <div className="p-4">
            <span className="text-4xl">⬇️</span>
            <h4 className="text-xl font-semibold mt-4">3. Download</h4>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Export your design as a high-quality PNG and use it online or print it out.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 text-center py-6 border-t dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Cardify. Built for creators & professionals.
        </p>
      </footer>
    </div>
  );
}

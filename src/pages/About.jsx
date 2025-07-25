export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 border-b border-blue-200 pb-2">
          About Cardify
        </h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          <strong className="text-blue-700">Cardify</strong> is your modern solution for generating sleek, professional-looking business cards and employee ID cards — all from the comfort of your browser. No design experience needed, no complicated software required.
        </p>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Designed for <span className="font-semibold text-gray-900">freelancers, HR teams, small businesses, and event coordinators</span>, Cardify empowers you to represent your brand with clean, customizable digital cards. Upload photos, add brand colors, select fonts, and instantly preview your card — front and back.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          With built-in download functionality and live preview, Cardify helps you save time and look polished — whether you're welcoming a new employee or networking at a conference.
        </p>
      </div>
    </div>
  );
}

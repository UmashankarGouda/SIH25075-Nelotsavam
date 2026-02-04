export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-amber-600 bg-clip-text text-transparent">
            About Nelotsavam
          </h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              Nelotsavam (നെല്ഉത്സവം) is a revolutionary digital platform designed to empower Kerala&apos;s rice farming community through technology, tradition, and sustainable practices.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To bridge the gap between traditional farming knowledge and modern agricultural technology, creating a sustainable and prosperous future for Kerala&apos;s rice farmers.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Gamified learning through &quot;Sevas&quot; (farming tasks)</li>
              <li>Expert agricultural guidance and consultation</li>
              <li>Weather-based farming insights</li>
              <li>Community platform for farmer networking</li>
              <li>Sustainable marketplace for inputs and produce</li>
              <li>Multilingual support (English & Malayalam)</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Built for Smart India Hackathon 2024</h2>
            <p className="text-gray-600 mb-6">
              This project was developed as part of the Smart India Hackathon 2024, focusing on agricultural innovation and digital empowerment of farmers.
            </p>
            
            <div className="text-center mt-12">
              <a href="/" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
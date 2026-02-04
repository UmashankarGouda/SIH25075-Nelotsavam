export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 via-blue-600 to-amber-600 bg-clip-text text-transparent">
            Nelotsavam Demo
          </h1>
          
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎥 Interactive Demo Coming Soon</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🌾 Gamified Sevas</h3>
                <p className="text-green-700">
                  Experience how farmers earn Dhanya points by completing daily farming tasks, from seed preparation to harvest celebrations.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">👨‍🌾 Expert Consultation</h3>
                <p className="text-blue-700">
                  See how farmers connect with agricultural experts for personalized advice on crop diseases, weather patterns, and best practices.
                </p>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">🏪 Sustainable Marketplace</h3>
                <p className="text-amber-700">
                  Explore the organic marketplace where farmers trade seeds, tools, and produce with sustainability scores and certifications.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">🤝 Community Features</h3>
                <p className="text-purple-700">
                  Discover how farmers share knowledge, celebrate harvests, and support each other through the platform&apos;s social features.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">
                📱 <strong>Mobile-First Design:</strong> Optimized for smartphones used by farmers in rural Kerala
              </p>
              <p className="text-gray-600 mb-4">
                🌐 <strong>Offline Support:</strong> Key features work without internet connectivity
              </p>
              <p className="text-gray-600">
                🗣️ <strong>Voice Interface:</strong> Malayalam voice commands for easy navigation
              </p>
            </div>
            
            <div className="text-center mt-12 space-x-4">
              <a href="/auth/register" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Start Your Journey →
              </a>
              <a href="/" className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
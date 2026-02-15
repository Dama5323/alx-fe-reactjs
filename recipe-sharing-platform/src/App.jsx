import './index.css'


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Recipe Sharing Platform
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          If you can see this text with proper styling (blue heading, gray text), 
          Tailwind CSS is working!
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primary Button
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Secondary Button
          </button>
        </div>
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Test Card</h2>
          <p className="text-gray-600">If this card has a shadow and white background, Tailwind is working!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
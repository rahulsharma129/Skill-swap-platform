// src/App.jsx
import React, { useState } from 'react';
// import './index.css'; // Make sure your main CSS file is imported somewhere, typically in main.jsx/main.tsx or here if preferred

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-lg w-full transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Vite + React + Tailwind CSS
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          If you see this text styled beautifully with a vibrant background,
          your Tailwind CSS installation is working perfectly in your Vite React app!
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Count is {count} (Tailwind Button)
        </button>
        <div className="mt-8 text-gray-600 text-sm">
          <p>
            Try changing classes in `App.jsx` and watch Vite's HMR in action!
          </p>
          <p className="mt-2">
            (e.g., change `from-purple-500` to `from-red-500` in the main div)
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
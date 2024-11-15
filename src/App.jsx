import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const encodedFlag = "ZmxhZ3t0aGlzX2lzX2Jhc2U2NF9mbGFnfQ=="; // flag{this_is_base64_flag}
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-500 mb-4">Welcome to the CTF Challenge</h1>
        <p className="text-lg text-gray-300">
          Some secrets are best discovered by those who look closely. Will you find what’s hidden beneath the surface?
        </p>
      </header>

      <main className="w-full max-w-2xl bg-gray-800 shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Challenge Overview</h2>
        <p className="text-gray-300 mb-4">
          In this challenge, you’ll need to sharpen your senses. There are clues buried within the layers of this page. Find them, piece by piece.
        </p>

        <div className="bg-gray-700 p-4 rounded-lg mb-4">
          <h3 className="text-xl text-indigo-400 font-semibold">Hint</h3>
          <span style={{ display: 'none' }}>{encodedFlag}</span>
          {/* Conditionally render hint content */}
          {isClick ? (
            <div>
              <p className="text-gray-300 mt-2">
                Sometimes, the truth is hidden in plain sight. Look for something unusual in the page's code.
              </p>
            </div>
          ) : (
            <button
              onClick={() => setIsClick(true)}
              className="mt-4 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-500 focus:outline-none"
            >
              Click to reveal hint
            </button>
          )}
        </div>
      </main>

      <footer className="text-center text-gray-500">
        <p className="text-sm mt-4">&copy; 2024 CTF Challenge. All rights reserved.</p>
      </footer>

      {/* Hidden Flag */}
      
    </div>
  );
}

export default App;

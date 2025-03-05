import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);
  const [error, setError] = useState("");

  const handleSum = (e) => {
    e.preventDefault();

    if (num1.trim() === "" || num2.trim() === "") {
      setError("⚠️  Please enter valid numbers.");
      return;
    }
    const number1 = Number(num1);
    const number2 = Number(num2);

    setSum(number1 + number2);
    setError(""); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-900 flex justify-center items-center p-4">
      <form 
        onSubmit={handleSum} 
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Simple Calculator</h2>
        
        <div className="mb-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            placeholder="Enter first number"
          />
        </div>
        
        <div className="mb-4">
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="border border-gray-300 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            placeholder="Enter second number"
          />
        </div>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Calculate Sum
        </button>

        <p className="mt-6 text-lg font-semibold text-center text-gray-800">
          The sum is: <span className="text-rose-600">{sum}</span>
        </p>
      </form>
    </div>
  );
}

export default App;

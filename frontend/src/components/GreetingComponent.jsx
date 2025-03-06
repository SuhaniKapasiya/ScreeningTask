import { useState } from "react";
import useGreeting from "../hook/useGreeting";

const GreetingComponent = () => {
  const [name, setName] = useState("");
  const { message, getGreeting } = useGreeting();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Greeting App
        </h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => getGreeting(name)}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Get Greeting
        </button>

        {message && (
          <p className="mt-4 text-center text-lg font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default GreetingComponent;

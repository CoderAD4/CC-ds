import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const checkEmail = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/check-email", { email });
      alert(response.data.message);
    } catch (error) {
      console.error("Error checking email", error);
    }
  };

  const checkUrl = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/check-url", { url });
      alert(response.data.message);
    } catch (error) {
      console.error("Error checking URL", error);
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <section className="flex flex-col md:flex-row items-center justify-between p-10 md:p-20">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Digital Security</h1>
          <p className="text-gray-400">AI-powered phishing detection...</p>
          <button className="bg-purple-600 px-6 py-2 rounded-full text-white hover:bg-purple-700">EXPLORE</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 p-10 text-center">
        <div className="space-y-4">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full md:w-1/3 p-2 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={checkEmail} className="bg-blue-600 px-6 py-2 rounded-full text-white">CHECK</button>

          <input
            type="url"
            placeholder="ENTER YOUR URL"
            className="w-full md:w-1/3 p-2 rounded text-black mt-4"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={checkUrl} className="bg-blue-600 px-6 py-2 rounded-full text-white">CHECK</button>
        </div>
      </footer>
    </div>
  );
};

export default App;

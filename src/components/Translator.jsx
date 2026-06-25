import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [lang, setLang] = useState("hi");

  const translateText = async () => {
    if (!text.trim()) {
      setResult("Please enter some text");
      return;
    }

    try {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|${lang}`
      );

      const data = await response.json();

      if (data.responseData) {
        setResult(data.responseData.translatedText);
      } else {
        setResult("Translation not available");
      }
    } catch (error) {
      console.log(error);
      setResult("Translation failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-md shadow-2xl p-6 rounded-2xl mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Translator App 🌍
      </h1>

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Enter English text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="w-full border p-2 mt-3 rounded"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
      </select>

      <button
        onClick={translateText}
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-3 mt-3 w-full rounded-xl font-semibold"
      >
        Translate
      </button>

      <div className="mt-4 p-3 bg-gray-100 rounded">
        <b>Result:</b> {result}
      </div>
    </div>
  );
}
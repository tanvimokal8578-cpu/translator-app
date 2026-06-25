export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center p-6">
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          About Translator App
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          This Translator Application was developed as part of the QSkill
          Front-End Development Internship using React, Tailwind CSS,
          React Router DOM, and Translation API.
        </p>

        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          The project includes a Translator Application, Random String
          Generator, and Client-Side Routing implementation using React.
        </p>
      </div>
    </div>
  );
}
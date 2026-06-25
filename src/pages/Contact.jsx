export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center p-6">
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Contact
        </h1>

        <p className="text-lg text-gray-700">
          Developed By
        </p>

        <h2 className="text-2xl font-semibold mt-2">
          Tanvi Mokal
        </h2>

        <p className="mt-4 text-gray-600">
          QSkill Front-End Development Internship Project
        </p>

        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl">
            Thank You For Visiting
          </button>
        </div>
      </div>
    </div>
  );
}
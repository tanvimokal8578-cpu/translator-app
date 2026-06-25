import { useState, useCallback, useEffect } from "react"

export default function RandomString() {
  const [random, setRandom] = useState("")

  const generate = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let str = ""
    for (let i = 0; i < 10; i++) {
      str += chars[Math.floor(Math.random() * chars.length)]
    }

    setRandom(str)
  }, [])

  useEffect(() => {
    generate()
  }, [generate])

  return (
    <div className="max-w-xl mx-auto bg-white/95 backdrop-blur-md shadow-2xl p-6 rounded-2xl mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Random String Generator 🎲
      </h1>

      <p className="text-center text-2xl font-mono text-green-600 font-bold">{random}</p>

      <button
        onClick={generate}
        className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-3 mt-3 w-full rounded-xl font-semibold"
      >
        Generate New
      </button>
    </div>
  )
}
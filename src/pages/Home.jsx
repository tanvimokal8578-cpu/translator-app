import Translator from "../components/Translator"
import RandomString from "../components/RandomString"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
      <Translator />
      <RandomString />
    </div>
  )
}
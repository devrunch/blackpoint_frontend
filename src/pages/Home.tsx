import Hero from "../components/Hero.tsx"
import FeaturesBlocks from "../components/features-blocks.tsx"
import Outcome from "../components/Outcome.tsx"
// import CounterMeasure from "./components/CounterMeasure.tsx"
function Home() {
  return (
    <>
      <main className="bg-gray-200 relative overflow-hidden h-screen">
        
        <Hero />
      </main>
        <FeaturesBlocks/>
        <Outcome/>
        

    </>
  )
}

export default Home

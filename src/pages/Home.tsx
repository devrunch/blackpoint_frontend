import Navbar from "../components/Navbar.tsx"
import Hero from "../components/Hero.tsx"
import FeaturesBlocks from "../components/features-blocks.tsx"
import Outcome from "../components/Outcome.tsx"
import FooterMain from "../components/Footer.tsx"
// import CounterMeasure from "./components/CounterMeasure.tsx"
function Home() {
  return (
    <>
      <main className="bg-gray-200 relative overflow-hidden h-screen">
        <Navbar />
        <Hero />
      </main>
        <FeaturesBlocks/>
        <Outcome/>
        <FooterMain/>
        

    </>
  )
}

export default Home

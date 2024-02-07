import FooterMain from "./components/Footer";
import LocationFinderMap from "./components/Map";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Identification from "./pages/Identification";
import Form from "./pages/form"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CounterMeasure from "./components/CounterMeasure.tsx"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="form" element={<Form/>}/>
      <Route path="identification" element={<Identification/>}/>
      <Route path="test" element={<LocationFinderMap/>}/>
    </Routes>
    <FooterMain/>
    </BrowserRouter>
    </>
  )
}

export default App

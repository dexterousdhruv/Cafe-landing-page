import Description from "./Sections/Description"
import Features from "./Sections/Features"
import Footer from "./Sections/Footer"
import Hero from "./Sections/Hero"
import Navbar from "./Sections/Navbar"
import SocialRow from "./Sections/SocialRow"


function App() {

  return (
    <>
      <Navbar/>
      <Hero />
      <Features/>
      <Description/>
      <SocialRow/>
      <Footer/>
    </>
  )
}

export default App

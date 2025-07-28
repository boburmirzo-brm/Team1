import Beautiful from "../shared/components/Beautiful"
import Hero from "../shared/components/Hero"
import Testimoniels from "../shared/components/Testimoniels"

const App = () => {
  let a = 12
  let b = 15
  return (
    <div>
      <h2>App</h2>
      <Hero/>
      <Testimoniels/>
      <Beautiful/>
    </div>
  )
}

export default App
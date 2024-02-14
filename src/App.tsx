import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="h-screen w-screen scroll-smooth overflow-y-auto snap-y snap-mandatory ">
      <Home />
      <About />
      <Projects />
      <Contacts />
      <div className="flex flex-col sticky bottom-0 -mt-9 w-full">
        <div className="h-3 w-full bg-lt-blue"></div>
        <div className="h-3 w-full bg-lt-yellow"></div>
        <div className="h-3 w-full bg-lt-red"></div>
      </div>
    </div>
  )
}

export default App

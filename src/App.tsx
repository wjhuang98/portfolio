import Home from './components/Home'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="h-screen w-screen scroll-smooth overflow-y-auto snap-y snap-mandatory ">
      <Home />
      <div id="About" className="flex flex-col bg-lt-black h-screen justify-center items-center overflow-hidden relative snap-start">
        <div className="h-1/2 w-1/2 text-4xl font-semibold font-neue text-lt-white">
          <p className="text-lt-orange">
            About
          </p>
          <div className="flex mt-2 h-1">
            <div className="w-1/12 h-1 bg-lt-blue"></div>
            <div className="w-1/12 h-1 bg-lt-yellow"></div>
            <div className="w-1/12 h-1 bg-lt-red"></div>
          </div>
          <p className="pt-4">
            I'm a senior at Boston University studying Computer Science and Japanese.
          </p>
          <p className="pt-4">
            I currently have experience in fullstack web development and am looking for full time offers.
          </p>
          <p className="pt-4">
            When I'm not developing, I like reading manga and light novels.
          </p>
        </div>
      </div>
      <div id="Projects" className="flex flex-col bg-lt-black h-screen justify-center items-center overflow-hidden relative snap-start">
        <div className="h-1/2 w-1/2 text-4xl font-semibold font-neue text-lt-white">
          <p className="text-lt-orange">
            Projects
          </p>
          <div className="flex mt-2 h-1">
            <div className="w-1/12 h-1 bg-lt-red"></div>
            <div className="w-1/12 h-1 bg-lt-yellow"></div>
            <div className="w-1/12 h-1 bg-lt-blue"></div>
          </div>
        </div>
      </div>
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

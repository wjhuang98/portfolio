function App() {
  return (
    <>
      {/* bg-[#201c1c] black*/}
      {/* bg-[#181818] dark */}
      {/* bg-[#d7c9b0] beige */}
      <div className="flex flex-col bg-[#181818] h-screen justify-center items-center">
        <div className="h-1/2 w-1/2 text-4xl font-semibold font-neue text-[#fbf8e7]">
          <p>
            Hello, I'm William
          </p>
          <p className="pt-2">
            <span className="text-[#81beac]">|</span> About
          </p>
          <p className="pt-2">
            <span className="text-[#eda435]">|</span> Projects
          </p>
          <p className="pt-2">
            <span className="text-[#942724]">|</span> Contacts
          </p>
        </div>
        <div className="flex flex-col fixed bottom-0 w-full">
          <div className="h-3 w-full bg-[#81beac]"></div>
          <div className="h-3 w-full bg-[#eda435]"></div>
          <div className="h-3 w-full bg-[#942724]"></div>
        </div>
      </div>
    </>
  )
}

export default App

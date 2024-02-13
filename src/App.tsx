function App() {
  return (
    <>
      {/* bg-[#201c1c] black*/}
      {/* bg-[#181818] dark */}
      {/* bg-[#d7c9b0] beige */}
      <div className="flex flex-col bg-[#181818] h-screen justify-center items-center">
        <p className="h-1/2 w-1/2 text-2xl font-mono text-[#fbf8e7]">
          Hello I'm William, you can call me Willy.
        </p>
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

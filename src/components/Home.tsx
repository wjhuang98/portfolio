export default function Home() {
    return (
        <div id="Home" className="flex flex-col bg-lt-black h-screen justify-center items-center overflow-hidden relative snap-start">
            <div className="h-1/2 w-1/2 text-4xl font-semibold font-neue text-lt-white">
                <p>
                    Hello, I'm William
                </p>
                <p className="pt-2">
                    <span className="text-lt-blue">|</span> <a href="#About" className="hover:text-lt-blue duration-300">About</a>
                </p>
                <p className="pt-2">
                    <span className="text-lt-yellow">|</span> <a href="#Projects" className="hover:text-lt-yellow duration-300">Projects</a>
                </p>
                <p className="pt-2">
                    <span className="text-lt-red">|</span> <a href="#Contacts" className="hover:text-lt-red duration-300">Contacts</a>
                </p>
            </div>
        </div>
    )
}
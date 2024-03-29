export default function Projects() {
    return (
        <div id="Projects" className="flex flex-col bg-lt-black h-screen justify-center items-center overflow-hidden relative snap-start">
            <div className="sm:h-1/2 h-1/3 sm:w-1/2 w-3/4 sm:text-4xl text-2xl font-semibold font-neue text-lt-white">
                <p className="text-lt-orange">
                    Projects
                </p>
                <div className="flex mt-2 h-1">
                    <div className="w-1/12 h-1 bg-lt-blue"></div>
                    <div className="w-1/12 h-1 bg-lt-yellow"></div>
                    <div className="w-1/12 h-1 bg-lt-red"></div>
                </div>
                <p className="pt-4">
                    WORK IN PROGRESS!
                </p>
                <p className="pt-2">
                    <span>but you can check out my</span> <a href="https://github.com/wjhuang98" className="text-lt-orange">github</a>
                </p>
            </div>
        </div>
    )
}
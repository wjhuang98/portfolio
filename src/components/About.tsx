export default function About() {
    return (
        <div id="About" className="flex flex-col bg-lt-black h-screen justify-center items-center overflow-hidden relative snap-start">
            <div className="md:h-1/2 h-4/6 md:w-1/2 w-3/4 md:text-4xl text-2xl font-semibold font-neue text-lt-white">
                <p className="text-lt-orange">
                    About
                </p>
                <div className="flex mt-2 h-1">
                    <div className="w-1/12 h-1 bg-lt-blue"></div>
                    <div className="w-1/12 h-1 bg-lt-yellow"></div>
                    <div className="w-1/12 h-1 bg-lt-red"></div>
                </div>
                <p className="pt-4">
                    I recently graduated from Boston University with a degree in Computer Science.
                </p>
                <p className="pt-4">
                    And soon I'll be working as a software engineer at Amazon Web Services.
                </p>
                <p className="pt-4">
                    Send me an email or message me on LinkedIn for any inquiries!
                </p>
            </div>
        </div>
    )
}
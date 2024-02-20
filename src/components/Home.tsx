export default function Home() {
    const goTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="Home" className="flex flex-col bg-lt-black h-screen justify-center items-center overflow-hidden relative snap-start">
            <div className="h-1/2 w-1/2 text-4xl font-semibold font-neue text-lt-white">
                <p>
                    Hello, I'm William
                </p>
                <p className="pt-2">
                    <span className="text-lt-blue">|</span> <button onClick={() => goTo('About')} className="hover:text-lt-blue duration-300">About</button>
                </p>
                <p className="pt-2">
                    <span className="text-lt-yellow">|</span> <button onClick={() => goTo('Projects')} className="hover:text-lt-yellow duration-300">Projects</button>
                </p>
                <p className="pt-2">
                    <span className="text-lt-red">|</span> <button onClick={() => goTo('Contacts')} className="hover:text-lt-red duration-300">Contacts</button>
                </p>
            </div>
        </div>
    )
}
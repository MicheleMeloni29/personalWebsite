'use client';

export default function MyProjects() {

    const [shouldRender, setShouldRender] = useState(visible);

    useEffect(() => {
        if (visible) setShouldRender(true);
    }, [visible]);

    const handleAnimation = () => { 
        if(!visible) setShouldRender(false);
    }

    return  shouldRender ? (
        <section
            onAnimationEnd={handleAnimationEnd}
            className={`transition-all duration-500 ease-in-out w-full max-w-5xl mx-auto ${visible
                    ? 'animate-fadeInUp'
                    : 'animate-fadeOutUp'
                }`}
        >
            <div className="bg-[#2d2d2d] rounded-md px-6 py-4 w-full shadow-md">
                {/* IDE-style bar */}
                <div className="flex items-center justify-between border-b border-[#3c3c3c] pb-3 mb-4">
                    <span className="text-sm text-[#9cdcfe]">~/portfolio/src/components/myProjects.jsx</span>
                    <div className="space-x-1">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                </div>

                <p className="text-[#ce9178] text-lg">🚧 Projects will be listed here soon...</p>
            </div>
        </section>
    ): null;    
}

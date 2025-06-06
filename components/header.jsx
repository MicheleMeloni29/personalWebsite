'use client';
// This file is a client component in Next.js 13+ with the app directory enabled.

import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Header() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="transition-opacity duration-700 ease-in-out w-full">
            <div
                className={`bg-[#2d2d2d] rounded-md p-6 w-full max-w-5xl mx-auto transition-transform duration-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
            >
                {/* IDE-style header bar */}
                <div className="flex items-center justify-between border-b border-[#3c3c3c] pb-3 mb-4">
                    <span className="text-sm text-[#9cdcfe]">~/portfolio/src/components/header.jsx</span>
                    <div className="space-x-1">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                </div>

                {/* Nome animato */}
                <div
                    className={`transition-all duration-700 delay-100 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                >
                    <h1 className="text-4xl font-bold text-[#dcdcaa]">
                        <Typewriter
                            words={['Michele Meloni', 'Sestu (CA), Sardinia, Italy', '27 years old']}
                            loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h1>
                </div>

                {/* Role typing */}
                <div
                    className={`transition-all duration-700 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                >
                    <p className="text-lg mt-2 text-[#ce9178]">
                        <Typewriter
                            words={['Software Developer', 'Frontend Specialist', 'Open Source Enthusiast']}
                            loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </p>
                </div>
            </div>
        </section>
    );
}

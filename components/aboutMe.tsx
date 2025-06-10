'use client';

import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

type Props = {
    onToggleProjects: () => void;
    isVisible: boolean;
  };

export default function AboutMe({ onToggleProjects, isVisible }: Props) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="transition-opacity duration-700 ease-in-out w-full">
            <div
                className={`bg-[#2d2d2d] rounded-md px-3 py-2 w-full max-w-5xl mx-auto transition-transform duration-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
            >
                {/* IDE-style header bar */}
                <div className="flex items-center justify-between border-b border-[#3c3c3c] pb-3 mb-4">
                    <span className="text-sm text-[#9cdcfe]">~/portfolio/src/components/aboutMe.jsx</span>
                    <div className="space-x-1">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
                        <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full" />
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                </div>

                {/* Typewriter text */}
                <div
                    className={`transition-all duration-700 delay-100 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        } h-[180px] overflow-hidden`}
                >
                    <p className="text-xl leading-relaxed mt-2 text-[#ce9178] max-w-3xl">
                        <Typewriter
                            words={[
                                'I approached programming in college, when I discovered the world of code for the first time. The first lines written for fun turned into a passion as I deepened the courses.',
                                'Among the many branches of computer science, I found my creative space in mobile and frontend. I immersed myself in the study of modern technologies, discovering React, React Native, TypeScript, JavaScript, Flutter and much more.',
                                'As a self-taught I built projects, also learned the backend with Python and today I continue to improve myself every day. I write code to grow, create value and give shape to my ideas.',
                            ]}
                            loop
                            cursor
                            cursorStyle="_"
                            typeSpeed={35}
                            deleteSpeed={25}
                            delaySpeed={2000}
                        />
                    </p>
                </div>

                {/* Toggle Projects button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <button
                        onClick={onToggleProjects}
                        className="bg-[#007acc] hover:bg-[#ce9178] text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
                    >
                        {isVisible ? 'Hide Projects' : 'View My Projects'}
                    </button>
                </div>
            </div>
        </section>
    );
}

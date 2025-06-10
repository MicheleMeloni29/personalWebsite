'use client';

import { useEffect, useState } from 'react';

type Props = {
    visible: boolean;
};

export default function MyProjects({ visible }: Props) {
    const [shouldRender, setShouldRender] = useState(visible);

    useEffect(() => {
        if (visible) {
            setShouldRender(true);
        }
    }, [visible]);

    const handleAnimationEnd = () => {
        if (!visible) {
            setShouldRender(false);
        }
    };

    if (!shouldRender) return null;

    return (
        <section
            onAnimationEnd={handleAnimationEnd}
            className={`w-full max-w-5xl mx-auto transition-all duration-500
        ${visible ? 'animate-slideInUp' : 'animate-slideOutUp'}
      `}
        >
            <div className="bg-[#2d2d2d] rounded-md px-6 py-4 shadow-md">
                <div className="flex items-center justify-between border-b border-[#3c3c3c] pb-3 mb-4">
                    <span className="text-sm text-[#9cdcfe]">
                        ~/portfolio/src/components/MyProjects.tsx
                    </span>
                    <div className="space-x-1">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                </div>
                <p className="text-[#ce9178] text-lg">🚧 Projects will be listed here soon...</p>
            </div>
        </section>
    );
}

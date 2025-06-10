'use client';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className=" bg-[#2d2d2d] text-sm text-[#d4d4d4] w-full px-4 py-4">
            <div className="max-w-5xl mx-auto">
                {/* File path */}
                <div className="flex items-center justify-between border-b border-[#3c3c3c] pb-3 mb-4">
                    <span className="text-sm text-[#9cdcfe]">~/portfolio/src/components/footer.tsx</span>
                    <div className="space-x-1">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                </div>
                
                {/* Blocco centrale: mail, telefono, icone */}
                <div className="flex flex-col items-center gap-1 text-center">
                    <div>
                        <span className="text-[#ce9178]">mail:</span>{' '}
                        melonimichelee29@gmail.com
                    </div>
                    <div>
                        <span className="text-[#ce9178]">tel:</span>{' '}
                        3457169323
                    </div>
                    <div className="flex gap-4 mt-2 text-[#9cdcfe] text-lg">
                        <a
                            href="https://linkedin.com/in/michele-meloni-210a1a281/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-white transition-transform transform hover:scale-150"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/michelemeloni"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hover:text-white transition-transform transform hover:scale-150"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

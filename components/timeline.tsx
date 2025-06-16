'use client';

import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

// Timeline component 
const timelineData = [
    {
        year: "2018 June",
        title: "Diploma",
        description: "I obtained my diploma at IIS 'Diongi Scano - Ottone Bacaredda' in Cagliari, Italy.",
    },
    {
        year: "2018 July-",
        title: "First Job",
        description: "I spent the summer working as a driver for a rental car company",
    },

    {
        year: "2018 October-2024 June",
        title: "Driver",
        description: "I started working as a driver for a local pizzeria.",
    },
    {
        year: "2019January-2019 May",
        title: "Smartphone Technician",
        description: "I worked in an electronics repair shop, mainly fixing smartphones and providing customer support.",

    },
    {
        year: "2020 September",
        title: "Start informatics Studies",
        description: "I enrolled in the 'Informatics' course at the University of Cagliari, Italy.",
    },
    {
        year: "2021",
        title: "Coding bases",
        description: "I started learning the basics of coding, with C language",
    },
    {
        year: "2022",
        title: "First mobile/web development",
        description: "Learn Java and started developing Android applications and HTML/CSS for webpages.",
    },
    {
        year: "2023",
        title: "Start passion for web and mobile development",
        description: "Lear backend bases and I discover new technologies for mobile development like Flutter and React Native.",
    },
    {
        year: "2024",
        title: "Development Passion",
        description: "Develop applications React Native, learn django for backend needs and start learning Next.js for web development.",
    },

];

export default function Timeline() {
    const [showContent, setShowContent] = useState(true);

    return (
        <section className="transition-opacity duration-700 ease-in-out w-full">
            <div className={`bg-[#2d2d2d] rounded-md px-3 py-2 w-full max-w-5xl mx-auto transition-transform duration-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {/* IDE-style header bar */}
                <div className="flex items-center justify-between border-b border-[#3c3c3c] pb-3 mb-4">
                    <span className="text-sm text-[#9cdcfe]">~/portfolio/src/components/timeline.tsx</span>
                    <div className="space-x-1">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full" />
                        <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full" />
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                </div>
                <div className={`transition-all duration-700 delay-100 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } h-[180px] overflow-hidden`}
                >
                    {/* Timeline items can be rendered here */}
                    <div className="space-y-4">
                        {timelineData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >

                                <p className="text-lg font-semibold text-[#dcdcaa]">{item.year}</p>
                                <h3 className="text-md font-bold text-[#ce9178]">{item.title}</h3>
                                <p className="text-sm text-[#9cdcfe]">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
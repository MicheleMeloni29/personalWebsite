'use client';

import React, { useState } from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import AboutMe from '../components/aboutMe';
import MyProjects from '../components/myProjects';
import Footer from '../components/footer';


export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const handleToggleProjects = () => {
    setShowProjects(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      <div className="border border-[#3c3c3c] bg-[#1e1e1e] rounded-md mx-2 sm:mx-4 md:mx-6 my-4 flex-1 flex flex-col shadow-xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-[#3c3c3c] px-4 py-2">
          <span className="text-sm text-[#9cdcfe]">~/portfolio/src/app/page.tsx</span>
          <div className="space-x-1">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>

        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 py-4 gap-6">
          <Header />
          <AboutMe
            isVisible={showProjects}
            onToggleProjects={handleToggleProjects}
          />
          <MyProjects visible={showProjects} />
          <Timeline />
        </div>
        <Footer />
      </div>
    </div>
  );
}

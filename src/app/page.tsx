import Header from '../../components/Header';
import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col">
      {/* Contenitore IDE principale */}
      <div className="border border-[#3c3c3c] bg-[#1e1e1e] rounded-md mx-2 sm:mx-4 md:mx-6 my-4 flex flex-col shadow-xl overflow-hidden flex-1">

        {/* Barra percorso file in alto */}
        <div className="flex items-center justify-between border-b border-[#3c3c3c] px-4 py-2">
          <span className="text-sm text-[#9cdcfe]">~/portfolio/src/app/page.tsx</span>
          <div className="space-x-1">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>

        {/* Contenuto (Header, About, ecc.) */}
        <div className="flex flex-col gap-3 px-6 py-3 items-center w-full">
          <Header />
          <AboutMe />
        </div>

        {/* Footer fissato in fondo al contenitore */}
        <Footer />
      </div>
    </div>
  );
}

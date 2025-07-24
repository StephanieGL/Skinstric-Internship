import { useState } from 'react'
import Header from '../components/home/Header'

import { Link } from 'react-router-dom';

const Intro = () => {
    const [testHovered, setTestHovered] = useState(false);
    const [discoverHovered, setDiscoverHovered] = useState(false);

  return (
    <div className="">
      <Header text="INTRO" />
      <main className="flex justify-center items-center h-[85vh] bg-white relative">
        <div
          className={`fixed left-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
            testHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            className="w-[100%] h-auto"
            src="Rectangle2779.png"
            alt="Left Rectangle"
          />
          <button className="absolute uppercase top-1/2 left-1/2 transform -translate-x-30 -translate-y-1/2 flex items-center text-[20px] cursor-pointer"
          onMouseEnter={() => setDiscoverHovered(true)}
          onMouseLeave={() => setDiscoverHovered(false)}>
            <img
              src="button-icon-shrunk2.png"
              alt="Discover A.I. Icon"
              className="w-10 h-10 mr-2 hover:scale-120 transition-all duration-300 ease-in-out"
            />
            <span className="text-[15px] font-roobertTrial">Discover A.I.</span>
          </button>
        </div>

        <section
          className={`text-center transition-all duration-1000 ease-in-out -mt-4 leading-tight ${
            testHovered ? 'transform -translate-x-3/5 opacity-100 text-start' : 'opacity-100'
          } ${discoverHovered ? 'transform translate-x-3/5 opacity-100 text-end' : 'opacity-100'}`}
        >
          <p
            className="text-[108px] font-roobertTrial"
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="3000">Sophisticated</p>
            <p className="text-[108px] font-roobertTrial -mt-2"
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="3000">skincare</p>
        </section>
        <div className={`fixed -right-0 top-1/2 transform -translate-y-1/2 transition-all duration-500 ${discoverHovered ? 'opacity-0' : 'opacity-100'}`}>
          <img
            className="w-[120%] h-auto"
            src="/Rectangle2778.png"
            alt="Right Rectangle"
          />
            <Link to="/Info">
                <button
                    className="absolute uppercase top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2 flex items-center text-[20px] cursor-pointer"
                    onMouseEnter={() => setTestHovered(true)}
                    onMouseLeave={() => setTestHovered(false)}
                >
                    <span className="text-[15px] font-roobertTrial">Take Test</span>
                    <img
                    src="/button-icon-shrunk.png"
                    alt="Take Test Icon"
                    className="w-10 h-10 ml-2 hover:scale-120 transition-all duration-300 ease-in-out"
                    />
                </button>
            </Link>
        </div>

        <div className="absolute bottom-0 left-4 text-[#1A1B1C] text-[16px] uppercase font-semibold font-roobertTrial">
          skinstric developed an a.i. that creates <br /> a highly-personalized routine tailored to <br /> what your skin needs.
        </div>
      </main>
    </div>
  )
}

export default Intro
import Header from '../components/home/Header'
import BackButton2 from '../components/resultspage/BackButton2';
import Diamond from '../components/resultspage/Diamond';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const ResultsPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
  
  const diamonds = [
    { label: 'Cosmetic', position: 'left' },
    { label: 'Demo', position: 'top', interactive: true },
    { label: 'Skin', position: 'right' },
    { label: 'Weather', position: 'bottom' },
  ];

  const handleTopMouseEntered = () => setIsHovered(true);
  const handleTopMouseLeave = () => setIsHovered(false);
  const handleTopClick = () => navigate('/analysis');

  return (
    <>
      <Header text="INTRO" />
      <div className="absolute top-12 left-12 text-[16px] font-bold font-roobertTrial uppercase">
        A.I. ANALYSIS
      </div>
      <div className="absolute top-20 left-12 text-[16px] font-roobertTrial uppercase">
        A.I. has estimated the following
      </div>
      <div className="absolute top-25 left-12 text-[16px] font-roobertTrial uppercase">
        Fix estimated information if needed.
      </div>
      
      <main className="h-[85vh] bg-white">
        <div className="fixed w-[100%] h-[68%] scale-82 ">
          <img
            src="/Rectangle2783.png"
            className={`absolute left-1/2 top-[54%] w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 transition-transform duration-400 ease-linear opacity-0 ${isHovered ? "scale-140 opacity-100" : "opacity-0"}`}
          />
          <div className="absolute left-1/2 top-[64%] -translate-x-1/2 font-roobertTrial uppercase">
            <Diamond label="Weather" />
          </div>
          <div className="absolute top-[54%] right-[53.2%] -translate-y-1/2 font-roobertTrial uppercase">
            <Diamond label="Cosmetic Concerns" />
          </div>
          <div className="absolute left-1/2 bottom-[56%] -translate-x-1/2 font-roobertTrial uppercase">
            <Diamond
              label="Demographics"
              interactive
              className={`transition-all duration-300 ease-in-out ${isHovered ? 'scale-[1.04] bg-blue-500 drop-shadow-white' : ''}`}
              onMouseEnter={handleTopMouseEntered}
              onMouseLeave={handleTopMouseLeave}
              onClick={handleTopClick}
            />
          </div>
          <div className="absolute top-[54%] left-[53.2%] -translate-y-1/2 font-roobertTrial uppercase">
            <Diamond label="Skin Type Details" />
          </div>
        </div>
      </main>
      <footer className="relative">
        <div className="absolute bottom-0 left-10 flex items-center">
          <BackButton2 />
        </div>
      </footer>
    </>
  );
};

export default ResultsPage;
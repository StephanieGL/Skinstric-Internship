import Header from '../components/home/Header'
import BackButton from '../components/info/BackButton';
import InfoBox from '../components/info/InfoBox';

const Info = () => {
  return (
   <div className="">
      <Header text="INTRO" />
      <div className="absolute top-10 left-14 text-[14px] font-bold font-roobertTrial uppercase">
        To Start Analysis
      </div>
      <main className="flex justify-center items-center h-[85vh] w-full bg-white relative">
        <div className="relative flex justify-center items-center">
          <img
            src="/Rectangle2780.png"
            className="absolute top-1/2 left-1/2 w-116 h-auto transform -translate-x-1/2 -translate-y-[67%] scale-200 z-10 animate-spin1"
            alt="Rectangle 2780"
          />
          <img
            src="/Rectangle2781.png"
            className="absolute top-1/2 left-1/2 w-104 h-auto transform -translate-x-1/2 -translate-y-[67%] scale-200 z-20 animate-spin2"
            alt="Rectangle 2781"
          />
          <img
            src="/Rectangle2782.png"
            className="absolute top-1/2 left-1/2 w-92 h-auto transform -translate-x-1/2 -translate-y-[67%] scale-200 z-30 animate-spin3"
            alt="Rectangle 2782"
          />
          <div className="relative z-40 flex justify-center items-center w-full h-full">
            <InfoBox />
          </div>
        </div>
      </main>
      <footer className="relative">
        <div className="absolute -bottom-7 left-10 flex items-center">
          <BackButton />
        </div>
      </footer>
    </div>
  )
}

export default Info
import Age from "../components/Summary/Age"
import BackButton from "../components/info/BackButton"
import Header from "../components/home/Header"
import Race from "../components/Summary/Race"
import Gender from "../components/Summary/Gender"
import Percentage from "../components/Summary/Percentage"
import { useState, useEffect } from "react"
import HomeButton from "../components/Summary/HomeButton"
import Circle from "../components/Summary/Circle"
import Options from "../components/Summary/Options"

const SummaryPage = () => {
  const [showAllRaces, setShowAllRaces] = useState(true);
  const [showAllAges, setShowAllAges] = useState(false);
  const [showAllGender, setShowAllGender] = useState(false);

  const [selectedRace, setSelectedRace] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedCard, setSelectedCard] = useState("race");
  
  const [raceClicked, setRaceClicked] = useState(true);
  const [ageClicked, setAgeClicked] = useState(false);
  const [genderClicked, setGenderClicked] = useState(false);

  const apiData = JSON.parse(localStorage.getItem('skinstricApiResponse'));
  const allRaces = apiData && apiData.race
    ? Object.entries(apiData.race)
    : [];
  let allAges = apiData && apiData.age
    ? Object.entries(apiData.age)
    : [];
  if (allAges.length > 5) {
    const [item] = allAges.splice(5, 1);
    allAges.unshift(item);
  }
  if (allAges.length > 0) {
    const [lastItem] = allAges.splice(-1, 1);
    allAges.unshift(lastItem);
  }
  if (allAges.length > 5) {
    const [item] = allAges.splice(5, 1);
    allAges.splice(2, 0, item);
  }
  const allGender = apiData && apiData.genders
    ? Object.entries(apiData.genders)
    : [];

  let percentTitle = "";
  let percentData = [];
  let cardTitleRace = "RACE";
  let cardTitleAge = "AGE";
  let cardTitleGender = "GENDER";
  let selectedKey = null;

  if (selectedCard === "race") {
    percentTitle = "RACE";
    percentData = allRaces;
    cardTitleRace = selectedRace || "RACE";
    selectedKey = selectedRace;
  }
  if (showAllRaces) {
    percentTitle = "RACE";
    percentData = allRaces;
    cardTitleRace = selectedRace || "RACE";
    selectedKey = selectedRace;
  }
  if (showAllAges) {
    percentTitle = "AGE";
    percentData = allAges;
    cardTitleAge = selectedAge || "AGE";
    selectedKey = selectedAge;
  }
  if (showAllGender) {
    percentTitle = "GENDER";
    percentData = allGender;
    cardTitleGender = selectedGender || "GENDER";
    selectedKey = selectedGender;
  }

  // Set selectedRace to the race with the highest % value on mount
  useEffect(() => {
    if (allRaces.length > 0) {
      const [topRace] = [...allRaces].sort((a, b) => b[1] - a[1]);
      setSelectedRace(topRace[0]);
    }
  }, []);

  // Set selectedAge to the age with the highest % value on mount
  useEffect(() => {
    if (allAges.length > 0) {
      const [topAge] = [...allAges].sort((a, b) => b[1] - a[1]);
      setSelectedAge(topAge[0]);
    }
  }, []);

  // Set selectedGender to the highest % value on mount
  useEffect(() => {
    if (allGender.length > 0) {
      const [topGender] = [...allGender].sort((a, b) => b[1] - a[1]);
      setSelectedGender(topGender[0]);
    }
  }, []);

  let radialPercent = 0;
    if (selectedKey && percentData.length > 0) {
      const found = percentData.find(([key]) => key === selectedKey);
      if (found) {
        radialPercent = found[1] * 100;
      }
    } else if (allRaces.length > 0) {
      radialPercent = Math.max(...allRaces.map(([_, value]) => value)) * 100;
  }

  return (
    <div className="w-full h-screen overflow-clip">
      <Header text="INTRO"/>
      <div className="w-full flex flex-col items-start ml-5 -mt-4">
        <p className="text-gray-800 text-[18px] font-roobertTrial font-semibold uppercase">a.i. analysis</p>
        <h1 className="text-[60px] leading-11 tracking-tight font-roobertTrial text-gray-900  uppercase">demographics</h1>
        <p className="text-gray-800 text-[16px] font-roobertTrial uppercase">predicted race & age</p>
      </div>
      <section className="w-full h-[57vh] flex justify-center items-center mt-12 overflow-x-clip">
        <div className="w-full h-full flex gap-2 ">
          <div className="w-1/8 h-full flex flex-col items-center justify-start ml-4 gap-2 border-t-1 border-black-200">
            <div
              onClick={() => {
                setShowAllRaces(true);               
                setShowAllAges(false);
                setShowAllGender(false);
                setRaceClicked(true);
                setAgeClicked(false);
                setGenderClicked(false);
                setSelectedCard("race");
              }}
              className="w-full cursor-pointer"
              id="race__card"
            >
              <Race title={selectedRace ||cardTitleRace} isClicked={raceClicked} />
            </div>
            <div
              onClick={() => {
                setShowAllAges(true);
                setShowAllRaces(false);
                setShowAllGender(false);
                setRaceClicked(false);
                setAgeClicked(true);
                setGenderClicked(false);
                setSelectedCard("age");
                
              }}
              className="w-full cursor-pointer"
              id="age__card"
            >
              <Age title={selectedAge || cardTitleAge} isClicked={ageClicked} />
            </div>
            <div
              onClick={() => {
                setShowAllGender(true);
                setShowAllRaces(false);
                setShowAllAges(false);
                setRaceClicked(false);
                setAgeClicked(false);
                setGenderClicked(true);
                setSelectedCard("gender");

              }}
              className="w-full cursor-pointer"
              id="gender__card"
            >
              <Gender title={selectedGender ||cardTitleGender} isClicked={genderClicked} />
            </div>
            
          </div>
          <div className="w-4/6 h-full bg-[#F3F3F4] flex flex-col justify-between border-t-1 border-black-200 relative">
            <div className="ml-4 mt-2">
              <Options
                selectedRace={selectedRace}
                selectedAge={selectedAge}
                selectedGender={selectedGender}
                selectedCard={selectedCard}
              />
            </div>
            <div className="absolute bottom-6 right-4">
              <Circle percent={radialPercent} size={350} color="#000" />
            </div>
          </div>
          <div className="w-1/5 h-full mr-4 bg-[#F3F3F4] flex items-center justify-center border-t-1 border-black-200 relative">
            <div className="absolute top-2 right-4 text-[18px] font-semibold text-black font-roobertTrial uppercase tracking-tight">
              A.I. Confidence
            </div>
            {percentData.length > 0 && (
              <div className="absolute top-2 left-2 text-[18px] font-semibold text-black font-roobertTrial uppercase">
                {percentTitle}
              </div>
            )}
            {percentData.length > 0 && (
              <div className={`w-full flex flex-col items-center font-roobertTrial justify-center tracking-normal leading-[1px] ${showAllAges ? "-mt-[20%]" : showAllRaces || selectedCard === "race" ? "-mt-[20%] -ml-[4px]" : showAllSex ?"-mt-[20%] uppercase" : ""}`}>
                <Percentage
                  title={null}
                  data={percentData}
                  selectedKey={selectedKey}
                  onSelect={key => {
                    if (showAllRaces) setSelectedRace(key);
                    if (showAllAges) setSelectedAge(key);
                    if (showAllGender) setSelectedGender(key);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="relative">
        <div className="absolute -bottom-24.5 left-9 flex items-center">
          <BackButton />
        </div>
        <div className="absolute -bottom-24.5 right-9 flex items-center">
          <HomeButton />
        </div>
      </footer>
    </div>
  )
}

export default SummaryPage;
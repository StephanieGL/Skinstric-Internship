import React from 'react'

const Race = ({ title, isClicked }) => {
   // API response from localStorage
  const apiData = JSON.parse(localStorage.getItem('skinstricApiResponse'));
  let topRace = '';
  let topValue = 0;

  if (apiData && apiData.race) {
    for (const [race, value] of Object.entries(apiData.race)) {
      if (value > topValue) {
        topRace = race;
        topValue = value;
      }
    }
  }

  const displayRace = title && title !== "RACE" ? title : topRace;

  return (
    <div className={`w-full h-30 p-2 flex flex-col items-start justify-between ${isClicked ? "bg-black" : "bg-[#F3F3F4}"}`}>
      {displayRace ? (
        <span className={`bg-transparent text-[18px] font-bold uppercase ${isClicked ? "text-white" : "text-black"}`}>{displayRace}</span>
      ) : (
        <span className="text-gray-500">No race data available</span>
      )}
      <span className={`bg-transparent text-[20px] uppercase font-semibold ${isClicked ? "text-white" : "text-black"}`}>RACE</span>
    </div>
  )
}

export default Race
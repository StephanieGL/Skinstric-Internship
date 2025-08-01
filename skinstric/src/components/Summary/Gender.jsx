import React from 'react'

const Gender = ({ title, isClicked }) => {
   // Get API response from localStorage
  const apiData = JSON.parse(localStorage.getItem('skinstricApiResponse'));
  let topGender = '';
  let topValue = 0;

  if (apiData && apiData.gender) {
    for (const [gender, value] of Object.entries(apiData.gender)) {
      if (value > topValue) {
        topGender = gender;
        topValue = value;
      }
    }
  }

  const displayGender = title && title !== "GENDER" ? title : topGender;

  return (
    <div className={`w-full h-30 border-t-1 border-black-200 max-w-xs flex flex-col p-2 items-start justify-between ${isClicked ? "bg-black" : "bg-[#F3F3F4]"}`}>
      {displayGender ? (
        <span className={`text-[18px] uppercase font-semibold ${isClicked ? "text-white" : "text-black"}`}>{displayGender}</span>
      ) : (
        <span className="text-gray-500">No gender data available</span>
      )}
      <span className={`bg-transparent text-[20px] font-bold ${isClicked ? "text-white" : "text-black"}`}>GENDER</span>
    </div>
  )
}

export default Gender;
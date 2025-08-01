const Options = ({ selectedRace, selectedAge, selectedGender, selectedCard }) => {
  let label = "";
  if (selectedCard === "race" && selectedRace) label = selectedRace;
  else if (selectedCard === "age" && selectedAge) label = selectedAge + " y.o.";
  else if (selectedCard === "gender" && selectedGender) label = selectedGender;
  else label = "";

  return (
    <span className="text-[44px] font-roobertTrial capitalize text-black">
      {label}
    </span>
  );
};

export default Options;
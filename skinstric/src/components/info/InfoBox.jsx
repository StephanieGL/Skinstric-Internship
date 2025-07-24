import { useState } from 'react';
import axios from 'axios';
import NextButton from './NextButton';

const InfoBox = () => {
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = async () => {
    if (inputValue.trim() === '') return;
    if (step === 1) {
      localStorage.setItem('name', inputValue.trim());
      setInputValue('');
      setStep(2);
    } else if (step === 2) {
      localStorage.setItem('location', inputValue.trim());
      setLoading(true);
      try {
        const res = await axios.post(
          'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne',
          {
            name: localStorage.getItem('name'),
            location: localStorage.getItem('location'),
          }
        );
        setTimeout(() => {
          setLoading(false);
          if (res.status === 200) {
            setSuccess(true);
          }
        }, 4000);
      } catch (err) {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center w-[600px]">
        <span className="text-[32px] text-[#1A1B1C] font-roobertTrial uppercase tracking-wide -mt-[30px]">
          Processing Submission
        </span>
        <span className="text-[100px] animate-pulse tracking-wide -mt-[50px]">
          ...
        </span>
      </div>
    );
  }

  if (success) {
    return (
      <>
        <div className="flex flex-col items-center font-roobertTrial -mt-[97px] w-[600px]">
          <span className="text-[30px] mb-2">
            Thank You!
          </span>
          <span className="text-[20px]">
            Proceed for the next step
          </span>
        </div>
        <footer className="relative">
          <div className="fixed bottom-26 right-12 flex items-center z-50">
            <NextButton />
          </div>
        </footer>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center font-roobertTrial -mt-[97px]">
      <label htmlFor="userInput" className="text-[16px] text-[#797979] uppercase tracking-wide">
        {step === 1 ? 'click to type' : 'city name'}
      </label>
      <input
        id="userInput"
        type="text"
        className="px-1 py-2 w-80 mt-1 h-12 text-[38px] focus:outline-none decoration-1 underline underline-offset-[5px] under text-center tracking-tight"
        placeholder={step === 1 ? 'Introduce Yourself' : 'your city name'}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={e => {
          if (e.key === 'Enter') handleInputBlur();
        }}
        autoFocus
      />
    </div>
  );
}

export default InfoBox
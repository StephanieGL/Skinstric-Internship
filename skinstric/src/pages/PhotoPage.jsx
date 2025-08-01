import Header from '../components/home/Header';
import BackButton from '../components/info/BackButton';
import Camera from '../components/photo/Camera';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PhotoPage = () => {
  const fileInputRef = useRef(null);
  const [base64Image, setBase64Image] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          const base64Only = reader.result.substring(reader.result.indexOf(',') + 1);
          setBase64Image(`/${base64Only}`);
          console.log(base64Only); 
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    if (window.confirm("Do you want to take a picture using your camera?")) {
      setShowCamera(true);
    }
  };

  const handleCameraCapture = (dataUrl) => {
    setBase64Image(dataUrl);
    localStorage.setItem('userPhoto', dataUrl);
    setShowCamera(false);
};

  useEffect(() => {
    const postImage = async () => {
      if (base64Image) {
        setUploading(true);
        await new Promise(resolve => setTimeout(resolve, 3000));
        try {
          const res = await axios.post(
            'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo',
            { 
              "image": base64Image
            }
          );
          setUploading(false);
          if (res.status === 200) {
            localStorage.setItem('skinstricApiResponse', JSON.stringify(res.data.data));
            setUploadSuccess(true);
            alert("Success! Your image was uploaded successfully!")
          }
        } catch (err) {
          setUploading(false);
          alert("Error, your image was not uploaded successfully, please try again with an image file")
        }
      }
    };
    postImage();
  }, [base64Image]);

  useEffect(() => {
    if (uploadSuccess) {
      navigate('/results');
    }
  }, [uploadSuccess, navigate]);

  if (uploading) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-white">
        <div className="relative flex justify-center items-center w-120 h-120">
          <img
            src="/Rectangle2780.png"
            className="absolute top-1/2 left-1/2 w-120 h-120 scale-125 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-spin1"
            alt="Rectangle2780"
          />
          <img
            src="/Rectangle2781.png"
            className="absolute top-1/2 left-1/2 w-96 h-96 scale-125 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-spin2"
            alt="Rectangle2781"
          />
          <img
            src="/Rectangle2782.png"
            className="absolute top-1/2 left-1/2 w-72 h-72 scale-125 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-spin3"
            alt="Rectangle2782"
          />
          <span className="text-[24px] font-roobertTrial text-[#1A1B1C] animate-pulse z-40 absolute top-1/2 left-1/2 ml-4 transform -translate-x-1/2 -translate-y-1/2 w-[126px]">
            Uploading image...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header text="INTRO" />
      <div className="absolute top-12 left-12 text-[16px] font-bold font-roobertTrial uppercase">
        To Start Analysis
      </div>
      <main className="flex justify-center items-center h-[80vh] w-full">
        <div className="flex justify-center items-center gap-62 -ml-12 -mt-2">
          <div className="relative flex justify-center items-center w-88 h-88">
            <img src="/Rectangle2780.png" 
            className="absolute top-1/2 left-1/2 w-72 h-72 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-spin1" 
            alt="Rectangle 2780" 
            />
            <img src="/Rectangle2781.png" 
            className="absolute top-1/2 left-1/2 w-64 h-64 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-spin2" 
            alt="Rectangle 2781"
             />
            <img src="/Rectangle2782.png" 
            className="absolute top-1/2 left-1/2 w-56 h-56 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-spin3" 
            alt="Rectangle 2782"
             />
            <img src="/camera.png" 
            className="absolute left-[58%] top-[12%]"
            alt="camera text"
            />
            <img
              src="/camera-icon.png"
              alt="Camera Icon"
              className="w-36 h-36 z-40 relative cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
              onClick={handleCameraClick}
            />
            {showCamera && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
                <Camera onCapture={handleCameraCapture} onClose={() => setShowCamera(false)} />
              </div>
            )}
          </div>
          <div className="relative flex justify-center items-center w-88 h-64">
            <img
              src="/Rectangle2780.png"
              className="absolute top-1/2 left-1/2 w-72 h-72 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-spin1"
              alt="Rectangle2780"
            />
            <img
              src="/Rectangle2781.png"
              className="absolute top-1/2 left-1/2 w-64 h-64 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-spin2"
              alt="Rectangle2781"
            />
            <img
              src="/Rectangle2782.png"
              className="absolute top-1/2 left-1/2 w-56 h-56 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-spin3"
              alt="Rectangle2782"
            />
            <img src="/gallery.png" alt="Gallery text" className="absolute z-10 right-[60%] -bottom-[10%]"></img>
            <img src="/gallery-icon.png" alt="Gallery Icon" className="w-38 h-38 z-40 relative cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" onClick={handleGalleryClick} />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </main>

      <footer className="relative">
        <div className="absolute -bottom-[80px] left-[38px] flex items-center">
          <BackButton />
        </div>
      </footer>
    </>
  )
}

export default PhotoPage;
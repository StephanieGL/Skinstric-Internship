import { useEffect, useRef, useState } from "react";

const Camera = ({ onCapture, onClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  let streamRef = useRef(null); 
  const [captured, setCaptured] = useState(false);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch {
        alert("Camera access denied or not available.");
        onClose && onClose();
      }
    };
    getCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [onClose]);

  const handleTakePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, 320, 240);
      const dataUrl = canvasRef.current.toDataURL("image/png");
      setCaptured(true);
      onCapture && onCapture(dataUrl);

      // Stop the stream after taking a photo
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  };
  
  const handleClose = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    onClose();
  }

  return (
    <div className="flex flex-col items-center gap-4 bg-white p-4 rounded shadow-lg">
      <button className="self-end text-black text-xs mb-2" onClick={handleClose}>Close</button>
      
      {!captured && (
        <div className="flex flex-col items-center gap-2">
          <video ref={videoRef} width={320} height={240} autoPlay playsInline muted className="rounded border" />
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={handleTakePhoto}
          >
            Take Picture
          </button>
        </div>
      )}
      <canvas ref={canvasRef} width={320} height={240} style={{ display: "none" }}  />
      {captured && <div className="text-green-700 font-bold">Photo saved!</div>}
    </div>
  );
};

export default Camera;
const Diamond = ({ label, className = '', onClick, onMouseEnter, onMouseLeave, interactive = false }) => (
  <div
    className={`relative flex items-center justify-center rotate-45 w-52 h-52 overflow-clip border-2 border-gray-300 bg-gradient-to-br from-white to-gray-100 shadow ${interactive ? 'cursor-pointer' : 'cursor-not-allowed'} ${className}`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ transition: 'transform 0.4s linear' }}
  >
    <div
      className="absolute inset-0 flex items-center justify-center -rotate-45"
      style={{ pointerEvents: 'none' }}
    >
      <span className="text-2xl font-bold text-gray-700 select-none">{label}</span>
    </div>
  </div>
);

export default Diamond;
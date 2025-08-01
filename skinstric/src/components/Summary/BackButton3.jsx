import { Link } from 'react-router-dom'

const BackButton3 = () => {
  return (
    <Link to="/results">
            <button className="uppercase flex items-center gap-3 font-semibold text-[16px] cursor-pointer">
                <img
                src="/button-icon-shrunk2.png"
                alt="Back Icon"
                className="w-16 h-16 hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <span>back</span>
            </button>
          </Link>
  )
}

export default BackButton3;
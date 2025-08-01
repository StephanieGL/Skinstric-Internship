import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to="/">
            <button className="uppercase flex items-center gap-3 font-semibold text-[16px] cursor-pointer">
                <span>home</span>
                <img
                src="/button-icon-shrunk.png"
                alt="Back Icon"
                className="w-16 h-16 hover:scale-110 transition-all duration-300 ease-in-out"
                />
            </button>
          </Link>
  )
}

export default HomeButton;
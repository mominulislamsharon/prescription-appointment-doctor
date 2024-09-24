import { assets } from "../assets/assets";


const Header = () => {
  return (
    <div>
      <div>
        <img className=" relative md:w-full w-auto h-auto md:h-[650px] rounded-md" src={assets.headerBanner} alt="" />
      </div>
      <div className="w-56 absolute top-0 right-0 pt-[600px] left-80">
        <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 font-medium">
        Book Appointments
        <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
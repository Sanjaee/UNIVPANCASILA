import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 px-20 shadow-lg z-50 bg-[#FF8ADE] w-full flex justify-between items-center top-0 fixed ">
      <div className="flex items-center">
        <img className="w-16" src="LOGO.png" alt="" />
        <img className="w-40 ml-2" src="LOGONAMA.png" alt="" />
      </div>
      <div className="hidden sm:block">
        <ul className="flex space-x-8 text-[#FFFFFF] text-sm font-bold">
          <Link to="/" className="hover:text-blue-500 cursor-pointer">
            Beranda
          </Link>
          <Link
            to="/sila-satu-1"
            className="hover:text-blue-500 cursor-pointer"
          >
            Konten
          </Link>
          <Link to="" className="hover:text-blue-500 cursor-pointer">
            Berita
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

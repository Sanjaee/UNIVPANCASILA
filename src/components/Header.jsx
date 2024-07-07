import React from "react";

const Header = () => {
  return (
    <div className="custom-1200:h-[70vh] custom-1000:h-[90vh]  w-full flex justify-center">
      <div className="w-full h-[385px] bg-[#FF8ADE] flex items-end justify-end px-10">
        <div className="flex items-center relative -mb-36">
          <div className="flex flex-col absolute custom-1000:-left-52 custom-1200:-left-80  ">
            <img
              className="w-full -mt-20 custom-1200:-mt-20 custom-1000:w-[650px] custom-1200:w-[848px]"
              src="./bgteks.png"
              alt=""
            />
            <img
              className="custom-1200:ml-28 custom-1000:ml-12  w-full custom-1000:w-[650px] custom-1200:w-[848px]"
              src="./bgteks2.png"
              alt=""
            />
          </div>
          <img
            className="w-full custom-1000:w-[750px] custom-1200:w-[848px]"
            src="./slider.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

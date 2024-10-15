import { useState } from "react";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { NavigationData } from "../../utils/constants";



const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          isOpen ? `w-[13%]` : `w-[4.5%]`
        } min-h-[90vh]  transition-[width] ease-in-out duration-500 p-6 text-end hidden lg:block `}
      >
        <div className="flex items-center justify-between ">
        
          <button
            className=" text-3xl text-white hover:text-hoverBlue "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <MdKeyboardDoubleArrowLeft />
            ) : (
              <MdKeyboardDoubleArrowRight />
            )}
          </button>
        </div>
        {NavigationData.map((item) => (
          
          <div
            key={item?.id}
            className="flex items-center  gap-5 mt-10  p-2 cursor-pointer"
            
          >
            <div className="text-white text-lg  hover:text-hoverBlue">{item?.icon}</div>
            <div
              className="transition duration-700 ease-in-out transform opacity-0 text-white text-start  hover:text-hoverBlue  "
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              {item?.name}
            </div>
          </div>
         
        ))}

      </div>
    </>
  );
};

export default NavigationBar;

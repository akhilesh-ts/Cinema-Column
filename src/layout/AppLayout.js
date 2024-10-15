import React from "react";
import NavBar from "../Page/NavBar";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Header/NavigationBar";

const AppLayout = () => {
  return (
    // <div className="bg-darkBlue">
    //   <NavBar />
    //   <div className="w-full flex items-center gap-2 ">
        
    //   <NavigationBar/>
      
    
    //   <Outlet />
      
    //   </div>
      
    // </div>

    // space-x-4
    <div className=" h-screen flex flex-col bg-darkBlue px-6">
  <NavBar />
  <div className="flex flex-1 overflow-hidden  ">
    
    <NavigationBar className="hidden lg:block"/>
    
    {/* flex-1 overflow-y-auto  */}
    <div className=" w-full overflow-y-auto  ">
      <Outlet />
    </div>
  </div>
</div>



  );
};

export default AppLayout;
